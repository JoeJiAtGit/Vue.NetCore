let codeString = {
  icons: `<div>
    <div class="cnblogs_code">
    <pre>   &lt;template&gt;
      &lt;div&gt;
        &lt;Icons :on-select="onSelect"&gt;&lt;/Icons&gt;
      &lt;/div&gt;
    &lt;/template&gt;
    &lt;script&gt;<span style="color: #000000;">
    import Icons from </span>"@/components/basic/Icons.vue"<span style="color: #000000;">;
    export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> {
      data() {},
      components: { Icons },
      methods: {
        onSelect(icon) {
          </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.$Message.error(icon);
        }
      }
    };
    </span>&lt;/script&gt;</pre>
    </div>
    <p>&nbsp;</p>
    </div>
    <script type="text/javascript">// <![CDATA[
    import Icons from "@/components/basic/Icons.vue";
    export default {
      data() {},
      components: { Icons },
      methods: {
        onSelect(icon) {
          this.$Message.error(icon);
        }
      }
    };
    // ]]></script>`,
  form: `<div class="cnblogs_code">
  <pre>&lt;template&gt;
    &lt;div&gt;
      &lt;<span style="color: #000000;">VolForm
        ref</span>="myform"<span style="color: #000000;">
        :label</span>-width="150"<span style="color: #000000;">
        :loadKey</span>="true"<span style="color: #000000;">
        :formFileds</span>="formFileds1"<span style="color: #000000;">
        :formRules</span>="formRules1"
      &gt;&lt;/VolForm&gt;
      &lt;div&gt;
        &lt;Button type="info" <span style="color: #0000ff;">long</span> @click="reset"&gt;重置表单&lt;/Button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt;<span style="color: #000000;">
  import VolForm from </span>"@/components/basic/VolForm.vue"<span style="color: #000000;">;
  export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> {
    components: { VolForm },
    methods: {
      reset() {
        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.$refs.myform.reset();
        </span><span style="color: #0000ff;">this</span>.$Message.error("表单已重置"<span style="color: #000000;">);
      }
    },
    data() {
      </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> {
        formFileds1: {
          Variety: </span>1<span style="color: #000000;">,
          AgeRange: </span>""<span style="color: #000000;">,
          DateRange: [],
          City: </span>"北京市"<span style="color: #000000;">,
          AvgPrice: </span>8.88<span style="color: #000000;">,
          number1: </span>20<span style="color: #000000;">,
          mail: </span>""<span style="color: #000000;">,
          Date: </span>""<span style="color: #000000;">,
          IsTop: </span>""<span style="color: #000000;">,
          Fruits: [],
          Other: </span>""<span style="color: #000000;">,
          SelectList:</span>['北京市','上海市','天津市','广州市','重庆市']<span style="color: #000000;">,
          Switch: </span>1<span style="color: #000000;">,
          readonlyText: </span>"可设置属性对数据合法性进行校验"<span style="color: #000000;">,
          readonlyImg:
            </span>"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/x2.jpg"<span style="color: #000000;">,
          ProImg:
            </span>"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/x3.jpg"<span style="color: #000000;">
        },
        formRules1: [
          </span><span style="color: #008000;">//</span><span style="color: #008000;">两列的表单，formRules数据格式为:[[{},{}]]</span>
  <span style="color: #000000;">        [
            {
              dataKey: </span>"city"<span style="color: #000000;">,
              title: </span>"自动绑定数据源"<span style="color: #000000;">,
              required: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              field: </span>"City"<span style="color: #000000;">,
              data: [],
              type: </span>"select"<span style="color: #000000;">
            },
            {
              title: </span>"手动绑定数据源"<span style="color: #000000;">,
              dataKey: </span>"age"<span style="color: #000000;">,
              placeholder: </span>"在这里可设置提示描述"<span style="color: #000000;">,
              </span><span style="color: #008000;">//</span><span style="color: #008000;">如果这里绑定了data数据，后台不会加载此数据源</span>
              data: [{ key: 1, value: "是" }, { key: 0, value: "否"<span style="color: #000000;"> }],
              required: </span><span style="color: #0000ff;">false</span><span style="color: #000000;">,
              field: </span>"Variety"<span style="color: #000000;">,
              type: </span>"select"<span style="color: #000000;">
            }
          ],
          [
            {
              title: </span>"手机号"<span style="color: #000000;">,
              required: </span><span style="color: #0000ff;">true</span>, <span style="color: #008000;">//</span><span style="color: #008000;">设置为必选项</span>
              field: "AgeRange"<span style="color: #000000;">,
              type: </span>"phone"<span style="color: #000000;">,
              onKeyPress: $event </span>=&gt;<span style="color: #000000;"> {
                </span><span style="color: #0000ff;">if</span> ($event.keyCode == 13<span style="color: #000000;">) {
                  </span><span style="color: #0000ff;">this</span>.$Message.error(<span style="color: #0000ff;">this</span>.formFileds1.AgeRange + ""<span style="color: #000000;">);
                }
              }
            },
            {
              title: </span>"date日期"<span style="color: #000000;">,
              field: </span>"Date"<span style="color: #000000;">,
              type: </span>"datetime"<span style="color: #000000;">
            }
          ],
          [
            {
              title: </span>"多选日期"<span style="color: #000000;">,
              range: </span><span style="color: #0000ff;">true</span>, <span style="color: #008000;">//</span><span style="color: #008000;">设置为true可以选择开始与结束日期</span>
              required: <span style="color: #0000ff;">false</span><span style="color: #000000;">,
              field: </span>"DateRange"<span style="color: #000000;">,
              type: </span>"date"<span style="color: #000000;">
            },
            {
              type: </span>"number"<span style="color: #000000;">,
              title: </span>"数字"<span style="color: #000000;">,
              required: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              placeholder: </span>"你可以自己定义placeholder显示的文字"<span style="color: #000000;">,
              field: </span>"number1"<span style="color: #000000;">
            }
          ],
          [
            {
              type: </span>"decimal"<span style="color: #000000;">,
              title: </span>"最大最小decimal值"<span style="color: #000000;">,
              max: </span>10<span style="color: #000000;">,
              min: </span>2<span style="color: #000000;">,
              required: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              field: </span>"AvgPrice"<span style="color: #000000;">
            },
            {
              title: </span>"邮箱"<span style="color: #000000;">,
              field: </span>"mail"<span style="color: #000000;">,
              range: </span><span style="color: #0000ff;">true</span>, <span style="color: #008000;">//</span><span style="color: #008000;">设置为true可以选择开始与结束日期</span>
              required: <span style="color: #0000ff;">false</span><span style="color: #000000;">,
              type: </span>"mail"<span style="color: #000000;">
            }
          ],     
          [
            {
              dataKey: "city",
              title: "多选",
              required: true,
              field: "SelectList",
              data: [],
              colSize:12,
              type: "selectList"
            }],
          [
            {
              title: </span>"自定义验证"<span style="color: #000000;">,
              required: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              field: </span>"Other"<span style="color: #000000;">,
              validator: (rule, val) </span>=&gt;<span style="color: #000000;"> {
                </span><span style="color: #0000ff;">if</span> (val != "234"<span style="color: #000000;">) {
                  </span><span style="color: #0000ff;">return</span> "必须输入【234】"<span style="color: #000000;">;
                }
                </span><span style="color: #0000ff;">return</span> ""<span style="color: #000000;">;
              }
            },
            {
              title: </span>"Switch"<span style="color: #000000;">,
              field: </span>"Switch"<span style="color: #000000;">,
              dataKey: </span>"enable", <span style="color: #008000;">//</span><span style="color: #008000;">这里会从后台自动绑定数据源</span>
  <span style="color: #000000;">            data: [],
              required: </span><span style="color: #0000ff;">false</span><span style="color: #000000;">,
              type: </span>"switch"<span style="color: #000000;">
            }
          ],
          [
            </span><span style="color: #008000;">//</span><span style="color: #008000;">readonlyImg</span>
  <span style="color: #000000;">          {
              title: </span>"checkbox"<span style="color: #000000;">,
              </span><span style="color: #008000;">//</span><span style="color: #008000;">如果这里绑定了data数据，后台不会加载此数据源</span>
  <span style="color: #000000;">            data: [
                { key: </span>0, value: "冬瓜"<span style="color: #000000;"> },
                { key: </span>1, value: "西瓜"<span style="color: #000000;"> },
                { key: </span>2, value: "南瓜"<span style="color: #000000;"> },
                { key: </span>3, value: "哈密瓜"<span style="color: #000000;"> }
              ],
              field: </span>"Fruits"<span style="color: #000000;">,
              type: </span>"checkbox"<span style="color: #000000;">
            },
            {
              title: </span>"字段只读"<span style="color: #000000;">,
              readonly: </span><span style="color: #0000ff;">true</span>, <span style="color: #008000;">//</span><span style="color: #008000;">设置readonly或disabled都行</span>
              field: "readonlyText"<span style="color: #000000;">,
              type: </span>"text"<span style="color: #000000;">
            }
          ],
          [
            {
              title: </span>"备注"<span style="color: #000000;">,
              required: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              field: </span>"IsTop"<span style="color: #000000;">,
              min: </span>3<span style="color: #000000;">,
              max: </span>5<span style="color: #000000;">,
              placeholder: </span>"至少输入3个字符,最多只能输入5个字符"<span style="color: #000000;">,
              colSize: </span>12, <span style="color: #008000;">//</span><span style="color: #008000;">设置12，此列占100%宽度</span>
              type: "textarea"<span style="color: #000000;">
            }
          ],
          [
            {
              title: </span>"图片只读"<span style="color: #000000;">,
              readonly: </span><span style="color: #0000ff;">true</span>, <span style="color: #008000;">//</span><span style="color: #008000;">设置readonly或disabled都行</span>
              field: "readonlyImg"<span style="color: #000000;">,
              type: </span>"img"<span style="color: #000000;">
            },
            {
              title: </span>"可修改图片"<span style="color: #000000;">,
              field: </span>"ProImg"<span style="color: #000000;">,
              type: </span>"img"<span style="color: #000000;">
            }
          ]
        ]
      };
    }
  };
  </span>&lt;/script&gt;</pre>
  </div>
  <p>&nbsp;</p> `,
  header: `<div class="cnblogs_code">
  <pre>&lt;template&gt;
    &lt;div&gt;
      &lt;VolHeader style="margin: 30px 0;" :icon="icon" :text="text"&gt;
        &lt;div slot="content"&gt;VolHeader这里可以定义显示内容&lt;/div&gt;
        &lt;div style="text-align: right;padding-top: 4px;"&gt;
          &lt;Button type="text" icon="ios-search" size="small" @click="()=&gt;{this.$Message.error('1')}"&gt;buttons1&lt;/Button&gt;
          &lt;Button type="text" icon="ios-search" size="small" @click="()=&gt;{this.$Message.error('2')}"&gt;buttons2&lt;/Button&gt;
        &lt;/div&gt;
      &lt;/VolHeader&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt;<span style="color: #000000;">
  import VolHeader from </span>"@/components/basic/VolHeader.vue"<span style="color: #000000;">;
  export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> {
    data() {
      </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> {
        icon: </span>"md-male"<span style="color: #000000;">,
        text: </span>"主题名称"<span style="color: #000000;">
      };
    },
    components: { VolHeader},
    methods: {
    }
  };
  </span>&lt;/script&gt;</pre>
  </div>
  <p>&nbsp;</p>`,
  box: `<div class="cnblogs_code">
  <pre>&lt;template&gt;
    &lt;div&gt;
      &lt;Button type="info" @click="model=!model"&gt;弹出框&lt;/Button&gt;
      &lt;VolBox :model.sync="model" title="弹出框标题" :height="400" :width="700" :padding="15"&gt;
        &lt;div&gt;弹出框内容&lt;/div&gt;
        &lt;!-- footer 这里不写，默认有一个关闭按钮 --&gt;
        &lt;div slot="footer"&gt;
          &lt;Button type="default" @click="()=&gt;{this.$Message.error('点击确认')}"&gt;确认&lt;/Button&gt;
          &lt;Button type="default" @click="()=&gt;{model=false}"&gt;点击关闭弹出框&lt;/Button&gt;
        &lt;/div&gt;
      &lt;/VolBox&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt;<span style="color: #000000;">
  import VolBox from </span>"@/components/basic/VolBox.vue"<span style="color: #000000;">;
  export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> {
    data() {
      </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> {
        model: </span><span style="color: #0000ff;">false</span><span style="color: #000000;">
      };
    },
    components: { VolBox },
    methods: {}
  };
  </span>&lt;/script&gt;</pre>
  </div>
  <p>&nbsp;</p>`,
  edittable: `<div class="cnblogs_code">
  <pre>&lt;template&gt;
    &lt;div&gt;
      &lt;VolHeader icon="md-podium" text="双击编辑"&gt;
        &lt;div slot="content"&gt;还没想好..&lt;/div&gt;
        &lt;div style="text-align: right;"&gt;
          &lt;Button type="info" size="small" ghost @click="clear"&gt;清空表&lt;/Button&gt;
          &lt;Button type="info" size="small" ghost @click="del"&gt;删除行&lt;/Button&gt;
          &lt;Button type="info" size="small" ghost @click="add"&gt;添加行&lt;/Button&gt;
          &lt;Button type="info" size="small" ghost @click="getRows"&gt;获取选中的行&lt;/Button&gt;
        &lt;/div&gt;
      &lt;/VolHeader&gt;
      &lt;vol-<span style="color: #000000;">table
        ref</span>="editTable"<span style="color: #000000;">
        :columns</span>="editTableOptions.columns"<span style="color: #000000;">
        :height</span>="370"<span style="color: #000000;">
        :index</span>="true"<span style="color: #000000;">
        :tableData</span>="editTableOptions.data"<span style="color: #000000;">
        :pagination</span>-hide="true"
      &gt;&lt;/vol-table&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt;<span style="color: #000000;">
  import VolTable from </span>"@/components/basic/VolTable.vue"<span style="color: #000000;">;
  import VolHeader from </span>"@/components/basic/VolHeader.vue"<span style="color: #000000;">;
  let $doc_vue;
  let doc_options </span>=<span style="color: #000000;"> {
    components: { VolTable, VolHeader },
    created() {
      $doc_vue </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">;
    },
    data() {
      </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> {
        editTableOptions: {
          data: [
            </span><span style="color: #008000;">//</span><span style="color: #008000;">表数据</span>
  <span style="color: #000000;">          {
              ExpertId: </span>276<span style="color: #000000;">,
              NotNull: </span>"还没想好"<span style="color: #000000;">,
              LimitLenght: </span>"baba"<span style="color: #000000;">,
              UserImg:
                </span>"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/x1.jpg"<span style="color: #000000;">,
              LimitNumber: </span>3<span style="color: #000000;">,
              EventClick: </span>"七秒钟的记忆"<span style="color: #000000;">,
              FormatString: </span>"2019-11-20"<span style="color: #000000;">,
              BindKeyValue: </span>"1"<span style="color: #000000;">,
              Enable: </span>1<span style="color: #000000;">,
              ReallyName: </span>"七秒的记忆"<span style="color: #000000;">,
              CreateDate: </span>"2018-09-18 17:45:54"<span style="color: #000000;">
            },
            {
              ExpertId: </span>276<span style="color: #000000;">,
              NotNull: </span>"往事已成风"<span style="color: #000000;">,
              LimitLenght: </span>"冷风中"<span style="color: #000000;">,
              UserImg:
                </span>"https://imgs-1256993465.cos.ap-chengdu.myqcloud.com/h5pic/x2.jpg"<span style="color: #000000;">,
              LimitNumber: </span>5<span style="color: #000000;">,
              EventClick: </span>"不午休的猫"<span style="color: #000000;">,
              FormatString: </span>"2019-11-08"<span style="color: #000000;">,
              BindKeyValue: </span>"2"<span style="color: #000000;">,
              Enable: </span>0<span style="color: #000000;">,
              ReallyName: </span>"月穿潭底水無痕"<span style="color: #000000;">,
              CreateDate: </span>"2018-09-18 17:45:54"<span style="color: #000000;">
            }
          ],
          columns: [
            </span><span style="color: #008000;">//</span><span style="color: #008000;">表配置</span>
  <span style="color: #000000;">          {
              field: </span>"ExpertId", <span style="color: #008000;">//</span><span style="color: #008000;">数据库表字段,必须和数据库一样，并且大小写一样</span>
              title: "主键ID", <span style="color: #008000;">//</span><span style="color: #008000;">表头显示的名称</span>
              isKey: <span style="color: #0000ff;">true</span>, <span style="color: #008000;">//</span><span style="color: #008000;">是否为主键字段</span>
              hidden: <span style="color: #0000ff;">true</span> <span style="color: #008000;">//</span><span style="color: #008000;">是否显示</span>
  <span style="color: #000000;">          },
            {
              field: </span>"NotNull"<span style="color: #000000;">,
              title: </span>"不可为空"<span style="color: #000000;">,
              width: </span>120<span style="color: #000000;">,
              required: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              edit: { type: </span>"text"<span style="color: #000000;"> }
            },
            {
              field: </span>"LimitLenght"<span style="color: #000000;">,
              title: </span>"限制字符长度"<span style="color: #000000;">,
              fixed: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              width: </span>150<span style="color: #000000;">,
              required: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              edit: { type: </span>"text", min: 2, max: 4<span style="color: #000000;"> }
            },
            {
              field: </span>"UserImg"<span style="color: #000000;">,
              title: </span>"图片"<span style="color: #000000;">,
              type: </span>"img"<span style="color: #000000;">,
              width: </span>150<span style="color: #000000;">
            },
            {
              field: </span>"LimitNumber"<span style="color: #000000;">,
              title: </span>"数字限制大小"<span style="color: #000000;">,
              width: </span>110<span style="color: #000000;">,
              require: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              edit: { type: </span>"number", min: 3, max: 5<span style="color: #000000;"> }
            },
            {
              field: </span>"EventClick"<span style="color: #000000;">,
              title: </span>"点击自定义事件"<span style="color: #000000;">,
              type: </span>"string"<span style="color: #000000;">,
              width: </span>120<span style="color: #000000;">,
              require: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              formatter: (row, column) </span>=&gt;<span style="color: #000000;"> {
                </span><span style="color: #008000;">//</span><span style="color: #008000;">单元格点击事亻</span>
                <span style="color: #0000ff;">return</span> "&lt;a&gt;" + row[column.field] + "&lt;/a&gt;"<span style="color: #000000;">;
              },
              click: (row, column) </span>=&gt;<span style="color: #000000;"> {
                </span><span style="color: #008000;">//</span><span style="color: #008000;">单元格点击事亻</span>
                <span style="color: #0000ff;">this</span><span style="color: #000000;">.$Message.error(
                  </span>"此单元格没有设置编辑属性。如果columns写在配置js中，拿不到this，请在created方法动态添加click方法"<span style="color: #000000;">
                );
              }
            },
            {
              field: </span>"FormatString"<span style="color: #000000;">,
              title: </span>"格式化日期"<span style="color: #000000;">,
              width: </span>120<span style="color: #000000;">,
              require: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
              formatter: row </span>=&gt;<span style="color: #000000;"> {
                </span><span style="color: #0000ff;">if</span> (!row.FormatString) <span style="color: #0000ff;">return</span><span style="color: #000000;">;
                </span><span style="color: #008000;">//</span><span style="color: #008000;">对单元格的数据格式化处理</span>
                <span style="color: #0000ff;">return</span> row.FormatString.replace(/-/g, "."<span style="color: #000000;">);
              }
            },
            {
              field: </span>"BindKeyValue"<span style="color: #000000;">,
              title: </span>"手动绑定数据源Key.Value"<span style="color: #000000;">,
              type: </span>"int"<span style="color: #000000;">,
              edit: { type: </span>"select"<span style="color: #000000;"> },
              bind: {
                </span><span style="color: #008000;">//</span><span style="color: #008000;">如果后面返回的数据为数据源的数据，请配置此bind属性，可以从后台字典数据源加载，也只以直接写上</span>
                key: "audit"<span style="color: #000000;">,
                data: [
                  { key: </span>"0", value: "审核中"<span style="color: #000000;"> },
                  { key: </span>"1", value: "审核通过"<span style="color: #000000;"> },
                  { key: </span>"2", value: "审核未通过"<span style="color: #000000;"> }
                ]
              },
              width: </span>180<span style="color: #000000;">
            },
            {
              field: </span>"Enable"<span style="color: #000000;">,
              title: </span>"自动绑定KeyValue"<span style="color: #000000;">,
              type: </span>"byte"<span style="color: #000000;">,
              bind: { key: </span>"enable", data: [] }, <span style="color: #008000;">//</span><span style="color: #008000;">此处值为data空数据，自行从后台字典数据源加载</span>
              width: 150<span style="color: #000000;">,
              edit: { type: </span>"switch"<span style="color: #000000;"> }
            },
            {
              field: </span>"CreateDate"<span style="color: #000000;">,
              title: </span>"日期"<span style="color: #000000;">,
              type: </span>"datetime"<span style="color: #000000;">,
              width: </span>150<span style="color: #000000;">,
              edit: { type: </span>"datetime"<span style="color: #000000;"> }
            }
          ]
        }
      };
    },
    methods: {
      del() {
        let rows </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.$refs.editTable.getSelected();
        </span><span style="color: #0000ff;">if</span> (rows.length == 0<span style="color: #000000;">) {
          </span><span style="color: #0000ff;">return</span> <span style="color: #0000ff;">this</span>.$Message.error("请先选中行"<span style="color: #000000;">);
        }
        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.$refs.editTable.delRow();
      },
      clear() {
        </span><span style="color: #0000ff;">this</span>.editTableOptions.data.splice(0<span style="color: #000000;">);
      },
      add() {
        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.editTableOptions.data.push({});
      },
      getRows() {
        let rows </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.$refs.editTable.getSelected();
        </span><span style="color: #0000ff;">if</span> (rows.length == 0<span style="color: #000000;">) {
          </span><span style="color: #0000ff;">return</span> <span style="color: #0000ff;">this</span>.$Message.error("请先选中行"<span style="color: #000000;">);
        }
        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.$Message.error(JSON.stringify(rows));
      },
      endEdit() {
        </span><span style="color: #008000;">//</span><span style="color: #008000;">手动结束编辑</span>
        <span style="color: #0000ff;">this</span>.$refs.editTable.edit.rowIndex = -1<span style="color: #000000;">;
      }
    }
  };
  export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> doc_options;
  </span>&lt;/script&gt;</pre>
  </div>
  <p>&nbsp;</p>`,
  voltable: `<div class="cnblogs_code">
  <pre>&lt;template&gt;
    &lt;div&gt;
      &lt;vol-<span style="color: #000000;">box
        :model.sync</span>="viewModel"<span style="color: #000000;">
        title</span>="远程加载table数据"<span style="color: #000000;">
        icon</span>="md-podium"<span style="color: #000000;">
        :height</span>="450"<span style="color: #000000;">
        :width</span>="600"
      &gt;
        &lt;<span style="color: #000000;">div
          style</span>="display: block;word-break: break-all;word-wrap: break-word;"<span style="color: #000000;">
          slot</span>="content"
        &gt;{{text}}&lt;/div&gt;
        &lt;div slot="footer"&gt;
          &lt;Button type="info" @click="viewModel=false"&gt;确认&lt;/Button&gt;
        &lt;/div&gt;
      &lt;/vol-box&gt;
      &lt;div&gt;
        &lt;VolHeader icon="md-apps" text="从api加载数据"&gt;
          &lt;div slot="content"&gt;还没想好..&lt;/div&gt;
          &lt;slot&gt;
            &lt;div style="text-align: right;"&gt;
              &lt;Button type="info" ghost @click="remoteLoad" size="small"&gt;刷新表数据&lt;/Button&gt;
            &lt;/div&gt;
          &lt;/slot&gt;
        &lt;/VolHeader&gt;
        &lt;vol-<span style="color: #000000;">table
          ref</span>="table"<span style="color: #000000;">
          :loadKey</span>="true"<span style="color: #000000;">
          :linkView</span>="viewRow"<span style="color: #000000;">
          :columns</span>="table.columns"<span style="color: #000000;">
          :pagination</span>="table.pagination"<span style="color: #000000;">
          :pagination</span>-hide="false"<span style="color: #000000;">
          :max</span>-height="450"<span style="color: #000000;">
          :url</span>="table.url"<span style="color: #000000;">
          :index</span>="true"<span style="color: #000000;">
          @loadBefore</span>="loadTableBefore"<span style="color: #000000;">
          @loadAfter</span>="loadTableAfter"
        &gt;&lt;/vol-table&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt;<span style="color: #000000;">
  import VolBox from </span>"@/components/basic/VolBox.vue"<span style="color: #000000;">;
  import VolTable from </span>"@/components/basic/VolTable.vue"<span style="color: #000000;">;
  import VolHeader from </span>"@/components/basic/VolHeader.vue"<span style="color: #000000;">;
  let $doc_vue;
  let doc_options </span>=<span style="color: #000000;"> {
    data() {
      </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> {
        viewModel: </span><span style="color: #0000ff;">false</span><span style="color: #000000;">,
        text: </span>""<span style="color: #000000;">,
        table: {
          url: </span>"api/App_Expert/getPageData"<span style="color: #000000;">,
          pagination: {
            total: </span>0, <span style="color: #008000;">//</span><span style="color: #008000;">分页总数量</span>
            size: 30, <span style="color: #008000;">//</span><span style="color: #008000;">分页大小,30,60,100.</span>
            sortName: "CreateDate" <span style="color: #008000;">//</span><span style="color: #008000;">从后加载数据分页时的排序字段</span>
  <span style="color: #000000;">        },
          columns: [
            </span><span style="color: #008000;">//</span><span style="color: #008000;">表配置</span>
  <span style="color: #000000;">          {
              field: </span>"ExpertId", <span style="color: #008000;">//</span><span style="color: #008000;">数据库表字段,必须和数据库一样，并且大小写一样</span>
              title: "主键ID", <span style="color: #008000;">//</span><span style="color: #008000;">表头显示的名称</span>
              isKey: <span style="color: #0000ff;">true</span>, <span style="color: #008000;">//</span><span style="color: #008000;">是否为主键字段</span>
              hidden: <span style="color: #0000ff;">true</span> <span style="color: #008000;">//</span><span style="color: #008000;">是否显示</span>
  <span style="color: #000000;">          },
            {
              field: </span>"HeadImageUrl"<span style="color: #000000;">,
              title: </span>"头像"<span style="color: #000000;">,
              type: </span>"img"<span style="color: #000000;">,
              width: </span>160<span style="color: #000000;">
            },
            {
              field: </span>"UserName"<span style="color: #000000;">,
              title: </span>"申请人帐号"<span style="color: #000000;">,
              link: </span><span style="color: #0000ff;">true</span>, <span style="color: #008000;">//</span><span style="color: #008000;">设置link=true后此单元格可以点击获取当前行的数据进行其他操作</span>
              width: 120<span style="color: #000000;">
            },
            {
              field: </span>"UserTrueName"<span style="color: #000000;">,
              title: </span>"申请人"<span style="color: #000000;">,
              width: </span>120<span style="color: #000000;">
            },
            {
              field: </span>"AuditStatus"<span style="color: #000000;">,
              title: </span>"审核状态"<span style="color: #000000;">,
              width: </span>120<span style="color: #000000;">,
              bind: {
                </span><span style="color: #008000;">//</span><span style="color: #008000;">如果后面返回的数据为数据源的数据，请配置此bind属性，可以从后台字典数据源加载，也只以直接写上</span>
                key: "audit"<span style="color: #000000;">,
                data: []
              }
            },
            {
              field: </span>"ReallyName"<span style="color: #000000;">,
              title: </span>"真实姓名"<span style="color: #000000;">,
              width: </span>120<span style="color: #000000;">,
              click: (row, column) </span>=&gt;<span style="color: #000000;"> {
                </span><span style="color: #008000;">//</span><span style="color: #008000;">单元格点击事亻</span>
                let msg =
                  "此处可以自己自定格式显示内容,此单元格原始值是:【" +<span style="color: #000000;">
                  row.ReallyName </span>+
                  "】"<span style="color: #000000;">;
                </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.$Message.error(msg);
                </span><span style="color: #008000;">//</span><span style="color: #008000;"> $doc_vue.$Message.error(msg);</span>
  <span style="color: #000000;">            },
              formatter: () </span>=&gt;<span style="color: #000000;"> {
                </span><span style="color: #008000;">//</span><span style="color: #008000;">对单元格的数据格式化处理</span>
                <span style="color: #0000ff;">return</span> "&lt;a&gt;点我&lt;/a&gt;"<span style="color: #000000;">;
              }
            }
          ]
        }
      };
    },
    components: { VolTable, VolBox, VolHeader },
    created() {
      $doc_vue </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">;
    },
    methods: {
      viewRow(row, column) {
        </span><span style="color: #008000;">//</span><span style="color: #008000;">设置linkView属性后，可不用配置click与formatter方法，直接使用linkView处理点击事件</span>
        <span style="color: #0000ff;">this</span>.text =
          "点击单元格的弹出框，当前点击的行数据：" +<span style="color: #000000;"> JSON.stringify(row);
        </span><span style="color: #0000ff;">this</span>.viewModel = <span style="color: #0000ff;">true</span><span style="color: #000000;">;
        </span><span style="color: #008000;">//</span><span style="color: #008000;">  this.$message.error(JSON.stringify(row));</span>
  <span style="color: #000000;">    },
      loadTableBefore(param, callBack) {
        </span><span style="color: #008000;">//</span><span style="color: #008000;">此处是从后台加数据前的处理，自己在此处自定义查询条件,查询数据格式自己定义或参考代码生成器查询页面请求的数据格式</span>
        console.log("加载数据前" +<span style="color: #000000;"> param);
        callBack(</span><span style="color: #0000ff;">true</span>); <span style="color: #008000;">//</span><span style="color: #008000;">此处必须进行回调，返回处理结果，如果是false，则不会执行后台查询</span>
  <span style="color: #000000;">    },
      loadTableAfter(data, callBack) {
        </span><span style="color: #008000;">//</span><span style="color: #008000;">此处是从后台加数据后，你可以在渲染表格前，预先处理返回的数据</span>
        console.log("加载数据后" +<span style="color: #000000;"> data);
        callBack(</span><span style="color: #0000ff;">true</span>); <span style="color: #008000;">//</span><span style="color: #008000;">同上</span>
  <span style="color: #000000;">    },
      remoteLoad() {
        </span><span style="color: #008000;">//</span><span style="color: #008000;">此处可以自定义查询条件,如果不调用的框架的查询，格式需要自己定义，</span>
        <span style="color: #008000;">//</span><span style="color: #008000;">如果查询的是框架getPageData方法,需要指定格式,如:</span>
        <span style="color: #008000;">//</span><span style="color: #008000;"> let where={wheres:[{"name":"UserTrueName","value":"教兽",displayType:"text"}]};</span>
        let where =<span style="color: #000000;"> {};
        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.$refs.table.load(where);
      }
    }
  };
  export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> doc_options;
  </span>&lt;/script&gt;</pre>
  </div>
  <p>&nbsp;</p>`,
  uploadExcel: ``, uploadImg: ``, volmenu: ``, viewGrid: ``
}
export default codeString