define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$escape),e=b.id,f="";return f+='<!--table区域-->\n<div class="comp-box di-o_o-block" data-o_o-di="',f+=d(e),f+='">\n    <div class="di-o_o-line">\n        <div class="" data-o_o-di="',f+=d(e),f+='-vu-table-breadcrumb"></div>\n    </div>\n    <div class="di-o_o-line">\n        <div class="vu-table" data-o_o-di="',f+=d(e),f+='-vu-table" style="height: 160px;"></div>\n    </div>\n    <div class="di-o_o-line">\n        <div class="di-table-prompt">\n            <div class="di-table-count" data-o_o-di="',f+=d(e),f+='-vu-table-count">\n                符合查询条件的数据只显示\n                <span class="di-table-count-num">#{currRecordCount}</span>条。查看全部数据，请点击下载\n            </div>\n            <div class="di-o_o-line" title="下载全量数据" style="display: inline-block; width: 30px;">\n                <div class="di-o_o-item" data-o_o-di="',f+=d(e),f+='-vu-table-download" style="width: 100%;"></div>\n            </div>\n        </div>\n    </div>\n\n</div>'}return{render:b}});