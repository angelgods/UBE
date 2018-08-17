const InfoVersion={data(){return{tableHeight:450,offset_height:390,columns:[{title:'项目',key:'section'},{title:'详细信息',key:'value',render:(h,p)=>{if(p.row.value=='身披白袍')return h('a',{attrs:{href:"https://blog.csdn.net/shenpibaipao",target:"_blank"}},p.row.value);else if(p.row.section=='iView')return h('a',{attrs:{href:p.row.value,target:"_blank"}},'v3.x');else if(p.row.section=='音乐')return h('a',{attrs:{href:"https://en.wikipedia.org/wiki/Remember_Me_(video_game)",target:"_blank"}},p.row.value);else return h('span',p.row.value)}}],data:[{section:'作者',value:'身披白袍'},{section:'Vue.js',value:'v2.5.17'},{section:'Vuex',value:'v3.0.1'},{section:'Vue-Router',value:'v3.0.1'},{section:'iView',value:'https://www.iviewui.com/'},{section:'音乐',value:'Olivier Deriviere'},]}},mounted(){this.tableHeight=window.innerHeight-this.$refs.table.$el.offsetTop-this.offset_height},methods:{},template:'<div>			<Table :columns="columns" :data="data" size="small" ref="table" :height="tableHeight"></Table>			<Divider dashed />			<Alert show-icon>				软件使用范围				<template slot="desc">本软件/应用仅用于学习交流，不得应用于商业用途。 </template>			</Alert>		</div>'};const InfoScoringRulesTable={data(){return{tableHeight:window.innerHeight+1,columns:[{title:'项目',key:'section',maxWidth:240,align:'center',render:(h,p)=>{if(p.index==9)return h('b',p.row.section);else return h('span',p.row.section)}},{title:'详情',key:'score',maxWidth:192,align:'center',},{title:'计数',key:'count',maxWidth:96,align:'center',render:(h,p)=>{if(p.index==0)return h('span','x'+this.constructSum);else if(p.index==1)return h('span','x'+this.startedConstrut);else if(p.index==2)return h('span','x'+this.connectedConstrut);else if(p.index==3)return h('span','x'+this.countTreasure);else if(p.index==4)return h('span','x'+this.perfectSearch);else if(p.index==5)return h('span','x'+this.unuesdTool);else if(p.index==6)return h('span','x'+this.remainHealth);else if(p.index==7)return h('span','x'+this.engineStarted);else if(p.index==8)return h('span','x'+this.remainDays);else if(p.index==9)return h('span',p.row.count);else return h('span','未知渲染序列')}},{title:'得分',key:'total',align:'center',render:(h,p)=>{if(p.index==0)return h('span','x'+(this.constructSum*10));else if(p.index==1)return h('span','x'+(this.startedConstrut*5));else if(p.index==2)return h('span','x'+(this.connectedConstrut*5));else if(p.index==3)return h('span','x'+(this.countTreasure*10));else if(p.index==4)return h('span','x'+(this.perfectSearch*20));else if(p.index==5)return h('span','x'+(this.unuesdTool*10));else if(p.index==6)return h('span','x'+(this.remainHealth*1));else if(p.index==7)return h('span','x'+(this.engineStarted*50));else if(p.index==8)return h('span','x'+(this.remainDays*5));else if(p.index==9)return h('b',{style:{color:'#19BE6B'}},this.totalScore);else return h('span','未知渲染序列')}}],data:[{section:'找到装置',score:'10分/个',count:0,total:0},{section:'启动装置',score:'5分/个',count:0,total:0},{section:'连接装置',score:'5分/个',count:0,total:0},{section:'找到宝物',score:'10分/个',count:0,total:0},{section:'完美探索',score:'20分/次',count:0,total:0},{section:'未用工具',score:'10分/个',count:0,total:0},{section:'剩余生命',score:'1分/点',count:0,total:0},{section:'激活引擎',score:'50分',count:0,total:0},{section:'剩余天数',score:'5分/天',count:0,total:0},{section:'总分',score:'\\',count:'\\',total:0}]}},mounted(){this.tableHeight=window.innerHeight-this.$refs.table.$el.offsetTop-1},computed:{constructSum:countConstrutSum,startedConstrut:countStartedConstrutSum,connectedConstrut:countConnectedConstrutSum,countTreasure:countTreasureSum,perfectSearch:()=>gp_store.state.perfectSearchSum,unuesdTool:countUnuesdToolSum,remainHealth:()=>gp_store.state.health,engineStarted:()=>Number(gp_store.state.engineStarted),remainDays:()=>gp_store.state.engineStarted?22-gp_store.state.today:0,totalScore:countScoreSum},template:'<div><Table stripe :columns="columns" :data="data" ref="table" :height="tableHeight"></Table></div>'};const InfoInventory={data(){return{COMPONENT_NAME:COMPONENT_NAME,CONSTRUCT_NAME:CONSTRUCT_NAME,TREASURE_NAME:TREASURE_NAME,TOOL_NAME:TOOL_NAME,defaultPanel:"1",twoLineToShowWidth:295}},computed:{clientWidth:()=>gp_store.state.clientWidth,isTwoLineToShow(){if(this.clientWidth<this.twoLineToShowWidth)return true;else return false}},methods:{},components:{'inventory-component-badge':InventoryComponentBadge,'inventory-construct-tag':InventoryConstructTag,'inventory-treasure-tag':InventoryTreasureTag,'inventory-tool-tag':InventoryToolTag},template:'<div>			<Collapse v-model="defaultPanel" accordion>				<Panel name="1">					<Icon type="md-construct" size="24"/>组件					<p slot="content">						<!--["铅","硅土","蜡","石英","银","树胶"]-->						<template v-for="(it,k) in COMPONENT_NAME">							<inventory-component-badge :key="k" :itemName="it" :two-line-to-show-width="twoLineToShowWidth"/>							<Divider type="vertical" v-if="k!=COMPONENT_NAME.length-1 && (k!=COMPONENT_NAME.length/2-1 || !isTwoLineToShow)" />							<br v-if="k==COMPONENT_NAME.length/2-1 && isTwoLineToShow" />							<br v-if="k==COMPONENT_NAME.length/2-1 && isTwoLineToShow" />						</template >					</p>				</Panel>				<Panel name="2">					<Icon type="md-cog" size="24"/>装置					<Tooltip content="点击物品可查看装置详情"><Icon type="md-information-circle" size="13"/></Tooltip>					<p slot="content">						<inventory-construct-tag v-for="(it,k) in CONSTRUCT_NAME" :key="k" :item-name="it"/>					</p>				</Panel>				<Panel name="3">					<Icon type="md-aperture" size="24"/>宝物					<Tooltip content="点击物品可查看宝物详情"><Icon type="md-information-circle" size="13"/></Tooltip>					<p slot="content">						<inventory-treasure-tag v-for="(it,k) in TREASURE_NAME" :key="k" :item-name="it"/>					</p>				</Panel>				<Panel name="4">					<Icon type="md-color-wand"  size="24"/>工具					<Tooltip content="点击物品可查看工具详情"><Icon type="md-information-circle" size="13"/></Tooltip>					<p slot="content">						<inventory-tool-tag v-for="(it,k) in TOOL_NAME" :key="k" :tool-name="it"/>					</p>				</Panel>			</Collapse>		</div>'};const InfoCalendar={data(){return{}},computed:{today:()=>gp_store.state.today,doomsdayBegin:()=>gp_store.state.doomsdayBegin},methods:{judgeStatus:(now)=>{if(now==22)return'finish';if(now==gp_store.state.today)return'process';else if(now<gp_store.state.today)return'finish';else return now==gp_store.state.doomsdayBegin?"error":"wait"}},template:'<div>			<Card>				<!--style="text-align:center"-->				<Divider >					<font style="font-weight:bold" color="#2b85e4">\日历</font>					<Tooltip placement="top">						<Icon type="md-information-circle" color="#2b85e4" size="12"/>						<span slot="content">							<Icon type="md-sunny" color="#ed4014" size="15"/>&nbsp;记号为末日来临日期<br/>							<Icon type="ios-alert" color="#2d8cf0" size="15"/>&nbsp;记号为事件发生日期<br/>							<Icon type="md-planet" color="#2d8cf0" size="15"/>&nbsp;记号为本星球拯救日						</span>					</Tooltip>				</Divider>				<Steps size="small">					<Step :status="judgeStatus(0)" icon="md-sunny"></Step>					<Step :status="judgeStatus(1)" icon="ios-alert" ></Step>					<Step :status="judgeStatus(2)" icon="md-sunny"></Step>					<Step :status="judgeStatus(3)" icon="md-sunny"></Step>					<Step :status="judgeStatus(4)" icon="ios-alert"></Step>					<Step :status="judgeStatus(5)" icon="md-sunny"></Step>					<Step :status="judgeStatus(6)" icon="md-sunny"></Step>				</Steps>				<Steps size="small">					<Step :status="judgeStatus(7)" icon="ios-alert"></Step>					<Step :status="judgeStatus(8)" icon="md-sunny"></Step>					<Step :status="judgeStatus(9)" icon="md-sunny"></Step>					<Step :status="judgeStatus(10)" icon="ios-alert"></Step>					<Step :status="judgeStatus(11)" icon="md-sunny"></Step>					<Step :status="judgeStatus(12)" icon="md-sunny"></Step>					<Step :status="judgeStatus(13)" icon="ios-alert"></Step>				</Steps>				<Steps size="small">					<Step :status="judgeStatus(14)" icon="md-sunny"></Step>					<Step :status="judgeStatus(15)" icon="md-sunny"></Step>					<Step :status="judgeStatus(16)" icon="ios-alert" ></Step>					<Step :status="judgeStatus(17)" icon="md-sunny"></Step>					<Step :status="judgeStatus(18)" icon="md-sunny"></Step>					<Step :status="judgeStatus(19)" icon="ios-alert"></Step>					<Step :status="judgeStatus(20)" icon="md-sunny"></Step>				</Steps>				<Steps size="small">					<Step :status="judgeStatus(21)" icon="md-sunny"></Step>					<Step :status="judgeStatus(22)" title="拯救日" icon="md-planet"></Step>				</Steps>			</Card>			<Divider dashed/>			<Alert type="success"><p style="text-align:center">				<b>当前为第 {{today+1}} 天。 离末日还有 {{doomsdayBegin-today}} 天。</b></p>			</Alert>		</div>'};const CheatMenu={data(){return{COMPONENT_NAME:COMPONENT_NAME,CONSTRUCT_NAME:CONSTRUCT_NAME,TREASURE_NAME:TREASURE_NAME,TOOL_NAME:TOOL_NAME}},computed:{debug:()=>gp_store.state.debug},methods:{safelyChangeDay:safelyChangeDay,randomEvent:eventHappend,cleanAllEvent:cleanAllEvent,cheatGetItem(itemName){if(!!itemName){inventory.dispatch('findItem',itemName);success(app,'作弊:获得['+itemName+']')}},cheatEditParam(itemName){switch(itemName){case'delay1':return gp_store.commit('incDoomsdayBegin',1);case'foward1':return gp_store.commit('incDoomsdayBegin',-1);case'dayinc1':return safelyChangeDay(1);case'daydec1':return safelyChangeDay(-1);case'healthinc1':return gp_store.commit('incHealth',1);case'healthdec1':return gp_store.commit('incHealth',-1);case'godhandinc1':return gp_store.commit('incGodsHand',1);case'godhanddec1':return gp_store.commit('incGodsHand',-1);case'randomEvent':return this.randomEvent();case'cleanAllEvent':return this.cleanAllEvent();default:return-1}},cheatChargeItem(itemName){if(!!itemName){gp_store.dispatch('chargeItem',itemName);success(app,'作弊:充能['+itemName+']')}}},template:'<Dropdown placement="right-start" v-show="debug" >			<DropdownItem divided>				<Icon type="md-eye" />\&nbsp;&nbsp;作弊项\<Icon type="ios-arrow-forward"/>			</DropdownItem>			<DropdownMenu slot="list">				<Dropdown placement="right-start" @on-click="cheatEditParam">					<DropdownItem>基本参数<Icon type="ios-arrow-down"/></DropdownItem>					<DropdownMenu slot="list">						<DropdownItem name="delay1">末日推迟1天</DropdownItem>						<DropdownItem name="foward1">末日提前1天</DropdownItem>						<DropdownItem name="dayinc1">日期增加1天</DropdownItem>						<DropdownItem name="daydec1">日期减少1天</DropdownItem>						<DropdownItem name="healthinc1">增加1生命值</DropdownItem>						<DropdownItem name="healthdec1">减少1生命值</DropdownItem>						<DropdownItem name="godhandinc1">上帝之手+1</DropdownItem>						<DropdownItem name="godhanddec1">上帝之手-1</DropdownItem>						<DropdownItem name="randomEvent">产生随机事件</DropdownItem>						<DropdownItem name="cleanAllEvent">清除随机事件</DropdownItem>					</DropdownMenu>				</Dropdown>			</DropdownMenu>			<DropdownMenu slot="list">				<Dropdown placement="right-start" @on-click="cheatGetItem">					<DropdownItem>获得物品<Icon type="ios-arrow-down"/></DropdownItem>					<DropdownMenu slot="list">						<DropdownItem v-for="(item,k) in COMPONENT_NAME" :key="k" :name="item">组件:{{item}}</DropdownItem>												<DropdownItem v-for="(item,k) in CONSTRUCT_NAME" :key="k+1000" :name="item" :divided="k==0">							装置:{{item}}						</DropdownItem>												<DropdownItem v-for="(item,k) in TREASURE_NAME" :key="k+2000" :name="item" :divided="k==0">							宝物:{{item}}						</DropdownItem>					</DropdownMenu>				</Dropdown>			</DropdownMenu>			<DropdownMenu slot="list">				<Dropdown placement="right-start" @on-click="cheatChargeItem">					<DropdownItem>充能物品<Icon type="ios-arrow-down"/></DropdownItem>					<DropdownMenu slot="list">						<DropdownItem v-for="(tool,k) in TOOL_NAME" :key="k" :name="tool">工具:{{tool}}</DropdownItem>												<DropdownItem v-for="(item,k) in CONSTRUCT_NAME" :key="k+1000" :name="item" :divided="k==0">							装置:{{item}}						</DropdownItem>					</DropdownMenu>				</Dropdown>			</DropdownMenu>		</Dropdown>'};const InfoNav={data(){return{audioPaused:false,versionModalShow:false,collapseMenuWidth:302}},computed:{debug:()=>gp_store.state.debug,musicModeOn:()=>gp_store.state.musicModeOn,health:()=>gp_store.state.health,today:()=>gp_store.state.today,godsHand:()=>gp_store.state.godsHand,doomsdayBegin:()=>gp_store.state.doomsdayBegin,todayDayInfo(){let nextDay=this.today+1;if(nextDay==this.doomsdayBegin)return'ios-nuclear';else if(calendar[this.today]==1)return'ios-alert';else return'md-sunny'},healthColor(){if(this.health>3)return'#19be6b';else if(this.health>1)return'#ff9900';else return'#ed4014'},dateColor(){let remainDays=this.doomsdayBegin-this.today;if(remainDays==1)return'#ed4014';else if(remainDays>5)return'#19be6b';else return'#ff9900'},godsHandColor(){if(this.godsHand>=6)return'#FF1493';else if(this.godsHand>=3)return'#EE82EE';else return'#515a6e'},clientWidth:()=>gp_store.state.clientWidth,isCollapseMenu(){if(this.clientWidth<this.collapseMenuWidth)return true;else return false}},methods:{mySelectItem(itemName){switch(itemName){case'toggleAudio':return this.toggleAudio();case'debugMode':{success(app,'Debug模式'+(!gp_store.state.debug?'开启!':'关闭!'));return gp_store.commit('switchDebug')}case'restartGame':{this.$router.replace("/");return gameRestart()}case'showVersionModal':return this.showVersionModal();case'scoringRulesTable':return this.$router.push("/scoringRulesTable");default:return-1}},toggleAudio(){if(this.audioPaused)replayAudio();else pauseAudio();this.audioPaused=!this.audioPaused;success(app,'音乐'+(this.audioPaused?'关闭!':'开启!'))},showVersionModal(){this.versionModalShow=true},jumpToCalendar(){this.$router.push("/calendar")},useGodsHand:useGodsHand},components:{'cheat-menu':CheatMenu,'game-version-modal':InfoVersion},template:'<div>		<div style="position:relative;z-index:999;">			<Card style="text-align:center">				<Tooltip max-width="200">					<span slot="content">						<font>&nbsp;当前日期 / 最近事件:</font></br>						<Icon type="md-sunny"/>:正常 <Icon type="ios-alert"/>:事件 <Icon type="ios-nuclear"/>:末日					</span>					<span @click="jumpToCalendar">						<Icon type="ios-clock" :color="dateColor"/>						<font :color="dateColor">日期:{{this.today+1}}(<Icon :type="todayDayInfo" size="16"/>)</font>					</span>				</Tooltip>				<Divider type="vertical" />				<Tooltip content="当前生命值和上帝之手能量\n[点击使用上帝之手]" max-width="200">					<Icon type="ios-heart" :color="healthColor"/><font :color="healthColor">&nbsp;{{health}}</font>					<span @click="useGodsHand">						<Icon type="ios-hand" :color="godsHandColor"/><font :color="godsHandColor">&nbsp;{{this.godsHand}}</font>					</span>				</Tooltip >				<Divider type="vertical"/>				<Dropdown @on-click="mySelectItem" trigger="click"><!--trigger="click"-->					<a href="javascript:void(0)">						<span v-show="!isCollapseMenu"><Icon type="ios-settings" />设置</span>						<Icon type="ios-arrow-down"/>					</a>					<DropdownMenu slot="list" >						<DropdownItem name="scoringRulesTable"><Icon type="ios-paper" />&nbsp;计分细则</DropdownItem>						<DropdownItem name="toggleAudio" v-if="musicModeOn"><Icon type="md-musical-notes" />&nbsp;音效开关</DropdownItem>						<DropdownItem name="restartGame" to="/">							<Icon type="md-undo" color="#ed4014"/><font  color="#ed4014">&nbsp;重启游戏</font>						</DropdownItem>						<DropdownItem name="debugMode">							<Icon type="ios-bug" color="#ba55d3"/><font  color="#ba55d3">&nbsp;调试模式</font>						</DropdownItem>						<DropdownItem divided><Icon type="ios-book" />							<a href="./res/rule/rule.pdf" target="_blank">&nbsp;游戏规则</a>						</DropdownItem>						<DropdownItem name="showVersionModal"><Icon type="logo-github" /><a >&nbsp;项目信息</a></DropdownItem>						<!--作弊选项-->						<cheat-menu></cheat-menu>					</DropdownMenu>				</Dropdown>			</Card>		</div>		<!---屏幕适配的导航菜单-->		<div>			<Menu mode="horizontal" theme="light" active-name="1" @on-select="mySelectItem" v-if="!isCollapseMenu">				<MenuItem name="1" to="/main"><Icon type="md-boat" />&nbsp;冒险</MenuItem>				<MenuItem name="2" to="/inventory"><Icon type="md-cube" />&nbsp;背包</MenuItem>				<MenuItem name="3" to="/calendar"><Icon type="md-calendar" />&nbsp;日历</MenuItem>			</Menu>			<Menu mode="horizontal" theme="light" :width="\'auto\'" v-else>				<Submenu name="1">                    <template slot="title"><Icon type="ios-paper" />导航</template>                    <MenuItem name="1-1" to="/main"><Icon type="md-boat" />冒险</MenuItem>                    <MenuItem name="1-2" to="/inventory"><Icon type="md-cube" />背包</MenuItem>                    <MenuItem name="1-3" to="/calendar"><Icon type="md-calendar"/>日历</MenuItem>                </Submenu>			</Menu>		</div>		<Divider dashed></Divider><!--用于分行-->		<Modal v-model="versionModalShow" title="版本信息" footer-hide :styles="{top:\'20px\'}">			<game-version-modal></game-version-modal>		</Modal>		<!--<div><slot name="content"></slot></div>-->	</div>'};const InfoMonsterCellGroup={data(){return{space:WHITESPACE_i18n}},computed:{wilderness:()=>gp_store.state.viewWilderness.wilderness,},methods:{monsterType(monster){if(monster.isSpirit)return'logo-snapchat';else return'logo-octocat'},monsterLongestName(){let name='';for(var ms of monsterSet)for(m of ms)if(m.name.length>name.length)name=m.name;return name},getEqualLenMonsterName(m_name){let longest=this.monsterLongestName();let dis=longest.length-m_name.length;let left=true;for(var i=0;i<dis;i++){if(left)m_name=this.space+m_name;else m_name+=this.space;left=!left}return m_name}},template:'<CellGroup>			<Cell v-for="(monster,k) in wilderness.monsters" :key="k">				<Icon slot="icon" :type="monsterType(monster)"/>				<span slot="label">					<font color="#2db7f5">{{monster.levelText()}}</font>					<Divider type="vertical"/>					<span v-html="getEqualLenMonsterName(monster.name)"></span>					<Divider type="vertical"/>					<font color="#ed4014">{{monster.ATKText()}}</font>					<Divider type="vertical"/>					<font color="#19be6b">{{monster.HITText()}}</font>				</span>			</Cell>		</CellGroup>'};const InfoGameEnd={components:{'info-scoring-rules-table':InfoScoringRulesTable},methods:{gameRestart:gameRestart},computed:{engineStarted:()=>gp_store.state.engineStarted},template:'<div>			<br>			<Alert type="success" v-if="engineStarted">你成功启动了引擎或拯救了星球!</Alert>			<Alert type="error" v-else>很不幸，你没能生还下来!</Alert>			<Divider dashed/>			<Button type="warning" to="/" long @click="gameRestart">重启游戏</Button>			<Divider dashed/>			<info-scoring-rules-table/>		</div>'}