import L from 'leaflet';

export const icon =(options)=>{
        L.Icon.Syl = L.DivIcon.extend({
        options: {
            className: '',
            iconSize: [12,12],
            color: 'red',
            animate: true,
            heartbeat: 2
        },
        initialize: function (options) {
            L.setOptions(this,options);
            // css
            let uniqueClassName = 'lpi-'+ new Date().getTime()+'-'+Math.round(Math.random()*100000);

            let before = ['background-color: '+this.options.color];
            let after = [
                'box-shadow: 0 0 6px 2px '+this.options.color,
                'animation: lmapIcon ' + this.options.heartbeat + 's ease-out',
                'animation-iteration-count: infinite',
                'animation-delay: '+ 0 + 's',
            ];
            if (!this.options.animate){
                after.push('animation: none');
            }
            let css = [
                '.'+uniqueClassName+'{'+before.join(';')+';}',
                '.'+uniqueClassName+':after{'+after.join(';')+';}',
            ].join('');
 
            let el = document.createElement('style');
            if (el.styleSheet){
                el.styleSheet.cssText = css;
            } else {
                el.appendChild(document.createTextNode(css));
            }
            document.getElementsByTagName('head')[0].appendChild(el);
            // apply css class
            this.options.className = this.options.className+' leaflet-lmap-icon '+uniqueClassName;
            // initialize icon
            L.DivIcon.prototype.initialize.call(this, options);
        }
    });
    return new L.Icon.Syl(options);
}