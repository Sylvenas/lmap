import L from 'leaflet';

export const icon = (options) => {
    L.Icon.Syl = L.DivIcon.extend({
        options: {
            className: '',
            iconSize: [12, 12],
            color: 'red',
            animate: true,
            heartbeat: 2
        },
        initialize: function (options) {
            L.setOptions(this, options);
            // css
            let uniqueClassName = 'lpi-' + new Date().getTime() + '-' + Math.round(Math.random() * 100000);

            let before = ['background-color: ' + this.options.color];
            let after = [
                'box-shadow: 0 0 6px 2px ' + this.options.color,
                'animation: lmapIcon ' + this.options.heartbeat + 's ease-out',
                'animation-iteration-count: infinite',
                'animation-delay: ' + 0 + 's',
            ];
            if (!this.options.animate) {
                after.push('animation: none');
            }
            let css = [
                '.' + uniqueClassName + '{' + before.join(';') + ';}',
                '.' + uniqueClassName + ':after{' + after.join(';') + ';}',
            ].join('');

            let el = document.createElement('style');
            if (el.styleSheet) {
                el.styleSheet.cssText = css;
            } else {
                el.appendChild(document.createTextNode(css));
            }
            document.getElementsByTagName('head')[0].appendChild(el);
            // apply css class
            this.options.className = this.options.className + ' leaflet-lmap-icon ' + uniqueClassName;
            // initialize icon
            L.DivIcon.prototype.initialize.call(this, options);
        }
    });
    return new L.Icon.Syl(options);
};


export const geoTime = (geoJSON, options) => {
    L.GeoTime = L.Class.extend({
        statics: {},
        options: {
            map: {},
            duration: 1000
        },
        initialize: function (geoJSON, options) {

            L.setOptions(this, options);

            this._map = this.options.map || {};
            this._duration = this.options.duration || {};
            this._geos = this._geos || [];
            this._makers = this._makers || [];
            this._chID = this._chID || 1;
            this._featureGroup = this._featureGroup || {};
            this._setData(geoJSON);

            this.start = this._start || {};
            this.stop = this._stop || {};
            this.speedUp = this._speedUp || {};
            this.speedDown = this._speedDown || {};
            this.clearLayer = this._clearLayer || {};
        },

        _setData: function (geoJSON) {
            if (!geoJSON) {
                return;
            }
            for (var i = 0, len = geoJSON.features.length; i < len; i++) {
                this._geos.push(geoJSON.features[i]);
            }
            this._addMakers(this);
        },
        _addMakers: function (self) {
            var lab = document.getElementById('dateNow');
            lab.innerHTML = this._geos[0].properties.index[0].time;
            for (var i = 0, len = this._geos.length; i < len; i++) {
                var marker = L.marker([this._geos[i].geometry.coordinates[1], this._geos[i].geometry.coordinates[0]], {
                    icon: this._getColor(this._geos[i].properties.index[0].val),
                });
                this._makers.push(marker)
            }
            this._featureGroup = L.featureGroup(this._makers).addTo(this._map);
        },
        _getColor: function (index) {
            switch (true) {
                case index < 2:
                    return icon({ iconSize: [index * 2, index * 2], color: '#36AE4C', heartbeat: 1 });
                case index < 4:
                    return icon({ iconSize: [index * 2, index * 2], color: '#6AB72D', heartbeat: 1 });
                case index < 6:
                    return icon({ iconSize: [index * 2, index * 2], color: '#ECE839', heartbeat: 1 });
                case index < 8:
                    return icon({ iconSize: [index * 2, index * 2], color: '#F29618', heartbeat: 1 });
                case index < 10:
                    return icon({ iconSize: [index * 2, index * 2], color: '#E41A16', heartbeat: 1 });
                default:
                    return icon({ iconSize: [index * 2, index * 2], color: '#36AE4C', heartbeat: 1 });

            }
        },
        _getPic: function (index) {
            return index > 8 ? lv5 :
                index > 6 ? lv4 :
                    index > 4 ? lv3 :
                        index > 2 ? lv2 :
                            lv1;
        },
        _isPlaying: function () {
            return this._intervalID ? true : false;
        },

        _start: function () {
            var btn = document.getElementById('btnPlay');
            if (this._isPlaying()) {
                this._stopAnimation();
                btn.value = 'start';
            } else {
                this._startAnimation();
                btn.value = 'stop';
            }
        },
        _stop: function () {
            this._stopAnimation();
        },
        _stopAnimation: function () {
            if (!this._intervalID) return;
            window.clearInterval(this._intervalID);
            this._intervalID = null;
        },
        _startAnimation: function () {
            if (this._intervalID) return;
            this._intervalID = window.setInterval(
                this._animation,
                this._duration,
                this
            );
        },
        _animation: function (self) {
            var lab = document.getElementById('dateNow');
            if (self._chID >= self._geos[0].properties.index.length) {
                clearInterval(self._intervalID);
                return;
            }
            for (var i = 0, len = self._makers.length; i < len; i++) {
                self._makers[i].setIcon(self._getColor(self._geos[i].properties.index[self._chID].val));
                lab.innerHTML = self._geos[i].properties.index[self._chID].time;
            }
            self._chID++;
        },

        _speedUp: function () {
            this._duration = this._duration + 1000;
            document.getElementById('speed').value = this._duration;

            if (this._intervalID) {
                this.stop();
                this.start();
            }
        },

        _speedDown: function () {
            if (this._duration > 1000) {
                this._duration = this._duration - 1000;
            } else {
                if (this._duration > 100)
                    this._duration = this._duration - 100;
                else {
                    this._duration = 100;
                }
            }
            document.getElementById('speed').value = this._duration;

            if (this._intervalID) {
                this.stop();
                this.start();
            }
        },

        _clearLayer: function () {
            this._stopAnimation();
            this._map.removeLayer(this._featureGroup);
        }
    });
    return new L.GeoTime(geoJSON, options);
};