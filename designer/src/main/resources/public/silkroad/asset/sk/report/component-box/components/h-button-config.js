define(["constant","report/component-box/components/h-button-vm-template"],function(a,b){function c(a){var b=a.rootId+a.serverData.id,c=$.extend(!0,{},e);return c.id=b+d,c.name=a.serverData.id,c}var d=a.COMPONENT_ID_SUFFIX.H_BUTTON,e={clzType:"VUI",clzKey:"H_BUTTON",dataOpt:{skin:"ui-normal-btn",text:"查询"}};return{type:"H_BUTTON",iconClass:"h-button",caption:"查询",defaultWidth:80,defaultHeight:55,vm:{render:function(a){return b.render({id:a.rootId+a.serverData.id+d})}},processRenderData:c,entityDescription:e}});