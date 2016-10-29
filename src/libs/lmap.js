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

export const echartsLayer = (id, ec) => {
    L.EchartsLayer = L.Class.extend({
        includes: [L.Mixin.Events],
        _echartsContainer: null,
        _map: null,
        _ec: null,
        _option: null,
        _geoCoord: [],
        _mapOffset: [0, 0],
        _delta: 0,
        _startTime: null,
        _lastMousePos: null,
        initialize: function (id, ec) {
            //删除地图上已有的echarts元素
            var echartPane = map.getPanes().overlayPane;
            while (echartPane.hasChildNodes()) //当div下还存在子节点时 循环继续
            {
                echartPane.removeChild(echartPane.firstChild);
            }
            //新增echarts容器元素
            this._map = map;
            var size = map.getSize();
            var div = this._echartsContainer = document.createElement('div');
            div.style.position = 'absolute';
            div.style.height = size.y + 'px';
            div.style.width = size.x + 'px';
            div.id = id;
            var domPosition = map._getMapPanePos();
            // 记录偏移量
            var _mapOffset = [-parseInt(domPosition.x) || 0, -parseInt(domPosition.y) || 0];
            div.style.top = _mapOffset[0] + 'px';
            div.style.left = _mapOffset[1] + 'px';
            map.getPanes().overlayPane.appendChild(div);
            this._init(map, ec, id);
        },
        _init: function (map, ec, id) {
            var self = this;

            self._map = map;

            self.removeLayer = function () {
                var echartPane = map.getPanes().overlayPane;
                while (echartPane.hasChildNodes()) //当div下还存在子节点时 循环继续
                {
                    echartPane.removeChild(echartPane.firstChild);
                }
            };

            //初始化mapoverlay
            /**
             * 获取echarts容器
             *
             * @return {HTMLElement}
             * @public
             */
            self.getEchartsContainer = function () {
                return self._echartsContainer;
            };

            /**
             * 获取map实例
             *
             * @return {map.Map}
             * @public
             */
            self.getMap = function () {
                return self._map;
            };
            /**
             * 经纬度转换为屏幕像素
             *
             * @param {Array.<number>} geoCoord  经纬度
             * @return {Array.<number>}
             * @public
             */
            self.geoCoord2Pixel = function (geoCoord) {
                var point = new L.latLng(geoCoord[1], geoCoord[0]);
                var pos = self._map.latLngToContainerPoint(point);
                return [pos.x, pos.y];
            };

            /**
             * 屏幕像素转换为经纬度
             *
             * @param {Array.<number>} pixel  像素坐标
             * @return {Array.<number>}
             * @public
             */
            self.pixel2GeoCoord = function (pixel) {
                var point = self._map.containerPointToLatLng(L.point(pixel[0], pixel[1]));
                return [point.lng, point.lat];
            };

            /**
             * 初始化echarts实例
             *
             * @return {ECharts}
             * @public
             */
            self.initECharts = function () {
                self._ec = ec.init.apply(self, arguments);
                self._bindEvent();
                self._addMarkWrap();
                return self._ec;
            };

            // addMark wrap for get position from baidu map by geo location
            // by kener at 2015.01.08
            self._addMarkWrap = function () {
                function _addMark(seriesIdx, markData, markType) {
                    var data;
                    if (markType == 'markPoint') {
                        var data = markData.data;
                        if (data && data.length) {
                            for (var k = 0, len = data.length; k < len; k++) {
                                if (!(data[k].name && this._geoCoord.hasOwnProperty(data[k].name))) {
                                    data[k].name = k + 'markp';
                                    self._geoCoord[data[k].name] = data[k].geoCoord;
                                }
                                self._AddPos(data[k]);
                            }
                        }
                    } else {
                        data = markData.data;
                        if (data && data.length) {
                            for (var k = 0, len = data.length; k < len; k++) {
                                if (!(data[k][0].name && this._geoCoord.hasOwnProperty(data[k][0].name))) {
                                    data[k][0].name = k + 'startp';
                                    self._geoCoord[data[k][0].name] = data[k][0].geoCoord;
                                }
                                if (!(data[k][1].name && this._geoCoord.hasOwnProperty(data[k][1].name))) {
                                    data[k][1].name = k + 'endp';
                                    self._geoCoord[data[k][1].name] = data[k][1].geoCoord;
                                }
                                self._AddPos(data[k][0]);
                                self._AddPos(data[k][1]);
                            }
                        }
                    }
                    self._ec._addMarkOri(seriesIdx, markData, markType);
                }

                self._ec._addMarkOri = self._ec._addMark;
                self._ec._addMark = _addMark;
            };

            /**
             * 获取ECharts实例
             *
             * @return {ECharts}
             * @public
             */
            self.getECharts = function () {
                return self._ec;
            };

            /**
             * 获取地图的偏移量
             *
             * @return {Array.<number>}
             * @public
             */
            self.getMapOffset = function () {
                return self._mapOffset;
            };

            /**
             * 对echarts的setOption加一次处理
             * 用来为markPoint、markLine中添加x、y坐标，需要name与geoCoord对应
             *
             * @public
             * @param option
             * @param notMerge
             */
            self.setOption = function (option, notMerge) {
                self._option = option;
                var series = option.series || {};

                // 记录所有的geoCoord
                for (var i = 0, item; item = series[i++];) {
                    var geoCoord = item.geoCoord;
                    if (geoCoord) {
                        for (var k in geoCoord) {
                            self._geoCoord[k] = geoCoord[k];
                        }
                    }
                }

                // 添加x、y
                for (var i = 0, item; item = series[i++];) {
                    var markPoint = item.markPoint || {};
                    var markLine = item.markLine || {};

                    var data = markPoint.data;
                    if (data && data.length) {
                        for (var k = 0, len = data.length; k < len; k++) {
                            if (!(data[k].name && this._geoCoord.hasOwnProperty(data[k].name))) {
                                data[k].name = k + 'markp';
                                self._geoCoord[data[k].name] = data[k].geoCoord;
                            }
                            self._AddPos(data[k]);
                        }
                    }

                    data = markLine.data;
                    if (data && data.length) {
                        for (var k = 0, len = data.length; k < len; k++) {
                            if (!(data[k][0].name && this._geoCoord.hasOwnProperty(data[k][0].name))) {
                                data[k][0].name = k + 'startp';
                                self._geoCoord[data[k][0].name] = data[k][0].geoCoord;
                            }
                            if (!(data[k][1].name && this._geoCoord.hasOwnProperty(data[k][1].name))) {
                                data[k][1].name = k + 'endp';
                                self._geoCoord[data[k][1].name] = data[k][1].geoCoord;
                            }
                            self._AddPos(data[k][0]);
                            self._AddPos(data[k][1]);
                        }
                    }
                }

                self._ec.setOption(option, notMerge);
            };

            /**
             * 增加x、y坐标
             *
             * @param {Object} obj  markPoint、markLine data中的项，必须有name
             * @param {Object} geoCoord
             */
            self._AddPos = function (obj) {

                var coord = self._geoCoord[obj.name];
                var pos = self.geoCoord2Pixel(coord);
                obj.x = pos[0]; //- self._mapOffset[0];
                obj.y = pos[1]; //- self._mapOffset[1];
            };

            /**
             * 绑定地图事件的处理方法
             *
             * @private
             */
            self._bindEvent = function () {
                self._map.on('move', _moveHandler('moving'));
                self._map.on('moveend', _moveHandler('moveend'));
                self._map.on('zoomstart', function () {
                    self._ec.clear();
                }); //去掉zoomstart事件
                self._map.on('zoomend', _zoomChangeHandler);
                self._ec.getZrender().on('dragstart', _dragZrenderHandler(true));
                self._ec.getZrender().on('dragend', _dragZrenderHandler(false));
                self._ec.getZrender().on('mouseup', function () {
                    // self.setOption(self._option);
                    //修改了echarts源码解决了这个问题
                });
                self._ec.getZrender().on('mousedown', function () {
                    // self._ec.clear();
                    //修改了echarts源码解决了这个问题
                });
                self._ec.getZrender().on('mousewheel', function (e) {
                    self._ec.clear(); //在mousewheel的时候清除echarts内容
                    self._lastMousePos = self._map.mouseEventToContainerPoint(e.event);
                    var delta = L.DomEvent.getWheelDelta(e.event);
                    var map = self._map,
                        zoom = map.getZoom();
                    delta = delta > 0 ? Math.ceil(delta) : Math.floor(delta);
                    delta = Math.max(Math.min(delta, 4), -4);
                    delta = map._limitZoom(zoom + delta) - zoom;

                    self._delta = 0;
                    self._startTime = null;

                    if (!delta) {
                        return;
                    }

                    if (map.options.scrollWheelZoom === 'center') {
                        map.setZoom(zoom + delta);
                    } else {
                        map.setZoomAround(self._lastMousePos, zoom + delta);
                    }
                });
            };

            /**
             * 地图缩放触发事件
             *
             * @private
             */
            function _zoomChangeHandler() {
                self.setOption(self._option);
            }

            // function _zoomatartChangeHandler() {
            //   self._ec.clear();
            // }

            /**
             * 地图移动、如拖拽触发事件
             *
             * @param {string} type moving | moveend  移动中|移动结束
             * @return {Function}
             * @private
             */
            function _moveHandler(type) {
                return function () {
                    var domPosition = self._map._getMapPanePos();
                    // 记录偏移量
                    self._mapOffset = [-parseInt(domPosition.x) || 0, -parseInt(domPosition.y) || 0];
                    self._echartsContainer.style.left = self._mapOffset[0] + 'px';
                    self._echartsContainer.style.top = self._mapOffset[1] + 'px';
                    //_fireEvent(type);
                    if (type == 'moving') {
                        self._ec.clear();
                    }
                    if (type == 'moveend') {
                        self.setOption(self._option);
                    }
                }
            }

            /**
             * Zrender拖拽触发事件
             *
             * @param {boolean} isStart
             * @return {Function}
             * @private
             */
            function _dragZrenderHandler(isStart) {

                return function () {
                    var func = isStart ? 'disable' : 'enable';
                    if (isStart) {
                        self._ec.clear();
                    } else {
                        self.setOption(self._option);
                    }
                    self._map.dragging[func]();
                };
            }
        }

    });
    return new L.EchartsLayer(id, ec);
}