"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1734],{15680:(n,d,a)=>{a.d(d,{xA:()=>E,yg:()=>s});var t=a(96540);function e(n,d,a){return d in n?Object.defineProperty(n,d,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[d]=a,n}function _(n,d){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);d&&(t=t.filter((function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable}))),a.push.apply(a,t)}return a}function m(n){for(var d=1;d<arguments.length;d++){var a=null!=arguments[d]?arguments[d]:{};d%2?_(Object(a),!0).forEach((function(d){e(n,d,a[d])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(d){Object.defineProperty(n,d,Object.getOwnPropertyDescriptor(a,d))}))}return n}function A(n,d){if(null==n)return{};var a,t,e=function(n,d){if(null==n)return{};var a,t,e={},_=Object.keys(n);for(t=0;t<_.length;t++)a=_[t],d.indexOf(a)>=0||(e[a]=n[a]);return e}(n,d);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(n);for(t=0;t<_.length;t++)a=_[t],d.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(e[a]=n[a])}return e}var i=t.createContext({}),r=function(n){var d=t.useContext(i),a=d;return n&&(a="function"==typeof n?n(d):m(m({},d),n)),a},E=function(n){var d=r(n.components);return t.createElement(i.Provider,{value:d},n.children)},S="mdxType",T={inlineCode:"code",wrapper:function(n){var d=n.children;return t.createElement(t.Fragment,{},d)}},o=t.forwardRef((function(n,d){var a=n.components,e=n.mdxType,_=n.originalType,i=n.parentName,E=A(n,["components","mdxType","originalType","parentName"]),S=r(a),o=e,s=S["".concat(i,".").concat(o)]||S[o]||T[o]||_;return a?t.createElement(s,m(m({ref:d},E),{},{components:a})):t.createElement(s,m({ref:d},E))}));function s(n,d){var a=arguments,e=d&&d.mdxType;if("string"==typeof n||e){var _=a.length,m=new Array(_);m[0]=o;var A={};for(var i in d)hasOwnProperty.call(d,i)&&(A[i]=d[i]);A.originalType=n,A[S]="string"==typeof n?n:e,m[1]=A;for(var r=2;r<_;r++)m[r]=a[r];return t.createElement.apply(null,m)}return t.createElement.apply(null,a)}o.displayName="MDXCreateElement"},46515:(n,d,a)=>{a.r(d),a.d(d,{assets:()=>i,contentTitle:()=>m,default:()=>T,frontMatter:()=>_,metadata:()=>A,toc:()=>r});var t=a(58168),e=(a(96540),a(15680));const _={},m=void 0,A={unversionedId:"study/db/SQL/\u8fbe\u68a6-\u4e3b\u5907\u90e8\u7f72",id:"study/db/SQL/\u8fbe\u68a6-\u4e3b\u5907\u90e8\u7f72",title:"\u8fbe\u68a6-\u4e3b\u5907\u90e8\u7f72",description:"\u5b89\u88c5\u5e26\u6388\u6743\uff08\u4e3b\u5907\uff09",source:"@site/docs/study/db/SQL/\u8fbe\u68a6-\u4e3b\u5907\u90e8\u7f72.md",sourceDirName:"study/db/SQL",slug:"/study/db/SQL/\u8fbe\u68a6-\u4e3b\u5907\u90e8\u7f72",permalink:"/docs/study/db/SQL/\u8fbe\u68a6-\u4e3b\u5907\u90e8\u7f72",draft:!1,tags:[],version:"current",lastUpdatedAt:1737611185,formattedLastUpdatedAt:"2025\u5e741\u670823\u65e5",frontMatter:{},sidebar:"studySidebar",previous:{title:"PostgreSQL",permalink:"/docs/study/db/SQL/PostgreSQL"},next:{title:"\u8fbe\u68a6-\u5355\u673a\u90e8\u7f72",permalink:"/docs/study/db/SQL/\u8fbe\u68a6-\u5355\u673a\u90e8\u7f72"}},i={},r=[{value:"\u5b89\u88c5\u5e26\u6388\u6743\uff08\u4e3b\u5907\uff09",id:"\u5b89\u88c5\u5e26\u6388\u6743\u4e3b\u5907",level:3}],E={toc:r},S="wrapper";function T(n){let{components:d,...a}=n;return(0,e.yg)(S,(0,t.A)({},E,a,{components:d,mdxType:"MDXLayout"}),(0,e.yg)("h3",{id:"\u5b89\u88c5\u5e26\u6388\u6743\u4e3b\u5907"},"\u5b89\u88c5\u5e26\u6388\u6743\uff08\u4e3b\u5907\uff09"),(0,e.yg)("pre",null,(0,e.yg)("code",{parentName:"pre",className:"language-shell"},"#######################################################################################################################################\n######################\u73af\u5883\u51c6\u5907 \u4e3b\u5907\u90fd\u5f97\u6267\u884c\n# \u770b\u4e0b\u65f6\u95f4\u662f\u5426\u6b63\u786e\ndate\nntpdate time.nist.gov\n# \u4fee\u6539\u4e3b\u673a\u540d\u79f0\nhostnamectl\nhostnamectl set-hostname node3\n# \u7528\u6237\u7ec4 \u7528\u6237\nsu root\ngroupadd dinstall -g 2001\nuseradd  -G dinstall -m -d /home/dmdba -s /bin/bash -u 2001 dmdba\npasswd dmdba\n#### \u4fee\u6539\u7cfb\u7edf\u53c2\u6570\nvi /etc/security/limits.conf\n# \u5185\u5bb9\u5982\u4e0b\n# dm\ndmdba  soft      nice       0\ndmdba  hard      nice       0\ndmdba  soft      as         unlimited\ndmdba  hard      as         unlimited\ndmdba  soft      fsize      unlimited\ndmdba  hard      fsize      unlimited\ndmdba  soft      nproc      65536\ndmdba  hard      nproc      65536\ndmdba  soft      nofile     65536\ndmdba  hard      nofile     65536\ndmdba  soft      core       unlimited\ndmdba  hard      core       unlimited\ndmdba  soft      data       unlimited\ndmdba  hard      data       unlimited\n# \u91cd\u542f\nreboot\n# \u68c0\u67e5\u53c2\u6570\u4fee\u6539\u662f\u5426OK\nsu - dmdba\nulimit -a\n# \u5982\u679c\u4e0d\u65b9\u4fbf\u91cd\u542f \u4e34\u65f6\u63aa\u65bd\nsu - dmdba\nulimit -n 65536\nulimit -u 65536\n\n\n############## \u76ee\u5f55\u89c4\u5212\nexit\n##\u5b9e\u4f8b\u4fdd\u5b58\u76ee\u5f55\nmkdir -p /dmdata/data \n##\u5f52\u6863\u4fdd\u5b58\u76ee\u5f55\nmkdir -p /dmdata/arch\n##\u5907\u4efd\u4fdd\u5b58\u76ee\u5f55\nmkdir -p /dmdata/dmbak\n# \u76f8\u5173\u76ee\u5f55\u6743\u9650\nchown -R dmdba:dinstall /dmdata/data\nchown -R dmdba:dinstall /dmdata/arch\nchown -R dmdba:dinstall /dmdata/dmbak\nchmod -R 755 /dmdata/data\nchmod -R 755 /dmdata/arch\nchmod -R 755 /dmdata/dmbak\n#\nll /dmdata/\n#######################################################################################################################################\n\n\n#######################################################################################################################################\n################## \u5f00\u59cb\u5b89\u88c5\n#root\n# \u6839\u636e\u81ea\u5df1\u7684\u5b89\u88c5\u5305\u8def\u5f84\u6765\ncd  /root/dm8/install\nmount -o loop dm8_20240408_x86_rh6_64.iso /mnt\n# \u6ce8\u610fkey\u6587\u4ef6\u7684\u8def\u5f84\u53ca\u6743\u9650 \u6700\u597d\u653e\u5230/home/dmdba/\u4e0b\ncp /root/dm8/key/dm3001108295.key /home/dmdba/dm.key\nsu - dmdba\ncd /mnt\n./DMInstall.bin -i\n# \u5207\u6362\u5230root\u7528\u6237\uff0c\u521b\u5efa DmAPService\uff0c\u5426\u5219\u4f1a\u5f71\u54cd\u6570\u636e\u5e93\u5907\u4efd\nexit\nsh /home/dmdba/dmdbms/script/root/root_installer.sh\n\n\n####### !!!!!!!!!!!!!!\u521d\u59cb\u5316\u5b9e\u4f8b\nsu - dmdba\ncd /home/dmdba/dmdbms/bin\n./dminit help\n# \u521d\u59cb\u5316\u5b9e\u4f8b \u6ce8\u610f\u76ee\u5f55\n./dminit path=/dmdata/data\n\n######## \u6ce8\u518c\u670d\u52a1\nexit\ncd /home/dmdba/dmdbms/script/root/\n./dm_service_installer.sh -t dmserver -dm_ini /dmdata/data/DAMENG/dm.ini -p DAMENG\ncd /home/dmdba/dmdbms/bin\nls | grep DAMENG\n\n### \u542f\u52a8 \u505c\u6b62 \u6570\u636e\u5e93\nsu - dmdba\ncd /home/dmdba/dmdbms/bin\n./DmServiceDAMENG start\n./DmServiceDAMENG stop\n./DmServiceDAMENG restart\n./DmServiceDAMENG status\n## \u6ce8\u610f\u9632\u706b\u5899\u662f\u5426\u6253\u5f00 \u5426\u5219\u8fde\u63a5\u4e0d\u4e865236\nexit\n# \u4e24\u79cd\u65b9\u5f0f \nsystemctl stop iptables\nsystemctl disable iptables\n# \u4e24\u79cd\u65b9\u5f0f \nsystemctl stop firewalld\nsystemctl disable firewalld\n# \u4fee\u6539ENABLE_ENCRYPT=0 \u5426\u5219\u62a5\u9519SSL\nsu - dmdba\nvi /dmdata/data/DAMENG/dm.ini\nENABLE_ENCRYPT = 0\ncd /home/dmdba/dmdbms/bin && ./DmServiceDAMENG restart\n\n# dm\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\nsu - dmdba\ncd \nvi .bashrc\nexport PATH=/home/dmdba/dmdbms/bin:$PATH\nexport LD_LIBRARY_PATH=/home/dmdba/dmdbms/bin:$LD_LIBRARY_PATH\n#\nsource .bashrc\ndisql\n#######################################################################################################################################\n\n\n#######################################################################################################################################\n##########################\n##########################\u4e3b\u5e93\u914d\u7f6e\n## \nvi /dmdata/data/DAMENG/dmarch.ini\n#\n[ARCHIVE_LOCAL1]\n        ARCH_TYPE            = LOCAL        \n        ARCH_DEST            = /dmdata/arch        \n        ARCH_FILE_SIZE       = 128        \n        ARCH_SPACE_LIMIT     = 0        \n        ARCH_FLUSH_BUF_SIZE  = 0        \n        ARCH_HANG_FLAG       = 1\n################\ndisql SYSDBA/SYSDBA@127.0.0.1:5236\n-- SQL\u547d\u4ee4\nalter database mount;\nalter database add archivelog 'DEST=/dmdata/arch,TYPE=local, FILE_SIZE=128,space_limit=0';\n-- \u5982\u679c\u6709\u9519\u8bef Archive config not exist. \u5148\u81ea\u5df1\u5efa\u4e00\u4e2a\u6587\u4ef6\uff08\u540e\u9762\u7684\u547d\u4ee4\u4e5f\u4f1a\u81ea\u52a8\u521b\u5efa\uff09\nalter database archivelog;\nalter database open;\nselect arch_mode from v$database;\n############\n# \u4f7f\u7528\u547d\u4ee4\u5907\u4efd\u4e3b\u5e93\uff1a\n# \u9519\u8bef\uff1a[-137]:DM server is running or exist other process which is operating the same database\n# \u9700\u8981\u5173\u95ed\u6570\u636e\u5e93\nDmServiceDAMENG stop\ndmrman CTLSTMT=\"BACKUP DATABASE '/dmdata/data/DAMENG/dm.ini' FULL TO BACKUP_FILE1 BACKUPSET  '/dmdata/dmbak/BACKUP_FILE_01'\"\nll /dmdata/dmbak/BACKUP_FILE_01/\n#\u6216\u8005\u53ef\u4ee5\u4f7f\u7528\u8054\u673a\u5907\u4efd\uff1a\ndisql SYSDBA/SYSDBA@127.0.0.1:5236\nSQL> backup database full backupset '/dmdata/dmbak/BACKUP_FILE_01';\n\n####################################\nvi /dmdata/data/DAMENG/dm.ini\n#\nINSTANCE_NAME = DMSERVER_PRI\nALTER_MODE_STATUS               = 0\nENABLE_OFFLINE_TS               = 2\nMAL_INI                         = 1                     #dmmal.ini\nARCH_INI                        = 1                     #dmarch.ini\n#################################### IP \u9700\u8981\u914d\u7f6e\u56fa\u5b9aIP\n#################################### IP \u9700\u8981\u914d\u7f6e\u56fa\u5b9aIP\n#################################### IP \u9700\u8981\u914d\u7f6e\u56fa\u5b9aIP  \u4e3b\u5e93\u548c\u5907\u5e93\u90fd\u662f\u4e00\u6837\nvi /dmdata/data/DAMENG/dmmal.ini\n#\nMAL_CHECK_INTERVAL     = 5\nMAL_COMBIN_BUF_SIZE    = 0\nMAL_SEND_THRESHOLD = 2048\nMAL_CONN_FAIL_INTERVAL = 5\nMAL_LOGIN_TIMEOUT      = 15\nMAL_BUF_SIZE           = 100\nMAL_SYS_BUF_SIZE       = 0\nMAL_VPOOL_SIZE         = 128\nMAL_COMPRESS_LEVEL     = 0\nMAL_TEMP_PATH          = \n[MAL_INST1]\nMAL_INST_NAME = DMSERVER_PRI #\u4e0edm.ini\u4e2d\u7684INSTANCE_NAME\u4e00\u81f4 \nMAL_HOST = 10.20.35.123 #MAL \u7cfb\u7edf\u76d1\u542c TCP \u8fde\u63a5\u7684 IP \u5730\u5740\nMAL_PORT = 5238 #MAL \u7cfb\u7edf\u76d1\u542c TCP \u8fde\u63a5\u7684\u7aef\u53e3\nMAL_INST_HOST = 10.20.35.123 #\u5b9e\u4f8b\u7684\u5bf9\u5916\u670d\u52a1 IP \u5730\u5740\nMAL_INST_PORT = 5236 # \u5b9e\u4f8b\u7684\u5bf9\u5916\u670d\u52a1\u7aef\u53e3\uff0c \u548cdm.ini \u4e2d\u7684 PORT_NUM \u4e00\u81f4\nMAL_INST_DW_PORT = 5237 #\u5b9e\u4f8b\u76d1\u542c\u5b88\u62a4\u8fdb\u7a0bTCP \u8fde\u63a5\u7684\u7aef\u53e3\nMAL_DW_PORT = 5239 #\u5b9e\u4f8b\u5bf9\u5e94\u7684\u5b88\u62a4\u8fdb\u7a0b\u76d1\u542c TCP \u8fde\u63a5\u7684\u7aef\u53e3\n[MAL_INST2]\nMAL_INST_NAME=DMSERVER_STANDBY # \u5b9e \u4f8b \u540d \uff0c \u548cdm.ini\u4e2d \u7684 INSTANCE_NAME \u4e00\u81f4\nMAL_HOST = 10.20.35.122 #MAL \u7cfb\u7edf\u76d1\u542c TCP \u8fde\u63a5\u7684 IP \u5730\u5740\nMAL_PORT = 5238 #MAL \u7cfb\u7edf\u76d1\u542c TCP \u8fde\u63a5\u7684\u7aef\u53e3\nMAL_INST_HOST = 10.20.35.122 #\u5b9e\u4f8b\u7684\u5bf9\u5916\u670d\u52a1 IP \u5730\u5740\nMAL_INST_PORT = 5236 # \u5b9e\u4f8b\u7684\u5bf9\u5916\u670d\u52a1\u7aef\u53e3\uff0c \u548cdm.ini \u4e2d\u7684 PORT_NUM \u4e00\u81f4\nMAL_INST_DW_PORT = 5237 #\u5b9e\u4f8b\u76d1\u542c\u5b88\u62a4\u8fdb\u7a0bTCP \u8fde\u63a5\u7684\u7aef\u53e3\nMAL_DW_PORT = 5239 #\u5b9e\u4f8b\u5bf9\u5e94\u7684\u5b88\u62a4\u8fdb\u7a0b\u76d1\u542c TCP \u8fde\u63a5\u7684\u7aef\u53e3\n#################################### \u5f52\u6863\u914d\u7f6e \nvi /dmdata/data/DAMENG/dmarch.ini\n#   \u5f52\u6863\u914d\u7f6e\u4e2d\u8981\u5305\u62ec\u672c\u5730\u5f52\u6863\u53ca\u5176\u4ed6\u51e0\u4e2a\u8282\u70b9\u7684\u5b9e\u65f6\u5f52\u6863\n    ARCH_WAIT_APPLY      = 0\n[ARCHIVE_LOCAL1]\n    ARCH_TYPE            = LOCAL    #\u672c\u5730\u5f52\u6863\u7c7b\u578b    \n    ARCH_DEST            = /dmdata/arch   #\u672c\u5730\u5f52\u6863\u6587\u4ef6\u5b58\u653e\u8def\u5f84     \n    ARCH_FILE_SIZE       = 128        #\u5355\u4f4d Mb \uff0c\u672c\u5730\u5355\u4e2a\u5f52\u6863\u6587\u4ef6\u6700\u5927\u503c\n    ARCH_SPACE_LIMIT     = 0        #\u5355\u4f4d Mb \uff0c0  \u8868\u793a\u65e0\u9650\u5236\uff0c\u8303\u56f4 1024~4294967294M\n    ARCH_FLUSH_BUF_SIZE  = 0        \n    ARCH_HANG_FLAG       = 1   \n[ARCHIVE_REALTIME1]\n    ARCH_TYPE            = REALTIME   #\u5b9e\u65f6\u5f52\u6863\u7c7b\u578b\n    ARCH_DEST            = DMSERVER_STANDBY #\u5b9e\u65f6\u5f52\u6863\u76ee\u6807\u5b9e\u4f8b\u540d\n    WAIT_APPLY           = 0        \n    ARCH_FAILOVER        = 0\n##################################\u8bbe\u7f6e OGUID\u5e76\u914d\u7f6e\u4e3b\u5e93\u6a21\u5f0f   \n# \u9700\u8981\u542f\u52a8\u6570\u636e\u5e93 mount\u6a21\u5f0f\nDmServiceDAMENG start mount\n#\ndisql SYSDBA/SYSDBA@127.0.0.1:5236\n#\n--SQL\u547d\u4ee4\nSP_SET_PARA_VALUE(1, 'ALTER_MODE_STATUS', 1); \nsp_set_oguid(20220607);\nALTER DATABASE PRIMARY;\nsp_set_oguid(20220607);\nSP_SET_PARA_VALUE(1, 'ALTER_MODE_STATUS', 0);\nexit\n# \u5982\u679c\u663e\u793a\u5904\u4e8e\u4e3b\u5e93\u914d\u7f6e\u72b6\u6001 \u8868\u793a\u6210\u529f\ndisql SYSDBA/SYSDBA@127.0.0.1:5236\n-- SQL \u5904\u4e8emount\u72b6\u6001\nselect STATUS$ from v$instance;\nexit\n#\nDmServiceDAMENG stop\nDmServiceDAMENG start\n#################################### \u5b88\u62a4\u8fdb\u7a0b\u914d\u7f6e \nvi /dmdata/data/DAMENG/dmwatcher.ini\n#\n[GRP1] #\u96c6\u7fa4\u7ec4\u7684\u540d\u79f0\nDW_TYPE = GLOBAL #\u5168\u5c40\u5b88\u62a4\u7c7b\u578b\nDW_MODE = MANUAL #\u624b\u52a8\u5207\u6362\u6a21\u5f0f\uff0c\u81ea\u52a8\u5207\u6362\uff1aAUTO\nDW_ERROR_TIME = 10 #\u8fdc\u7a0b\u5b88\u62a4\u8fdb\u7a0b\u6545\u969c\u8ba4\u5b9a\u65f6\u95f4\nINST_RECOVER_TIME = 60 #\u4e3b\u5e93\u5b88\u62a4\u8fdb\u7a0b\u542f\u52a8\u6062\u590d\u7684\u95f4\u9694\u65f6\u95f4\nINST_ERROR_TIME = 10 #\u672c\u5730\u5b9e\u4f8b\u6545\u969c\u8ba4\u5b9a\u65f6\u95f4\nINST_OGUID = 20220607 #\u5b88\u62a4\u7cfb\u7edf\u552f\u4e00OGUID\u503c\nINST_INI = /dmdata/data/DAMENG/dm.ini #dm.ini  \u914d\u7f6e\u6587\u4ef6\u8def\u5f84\nINST_AUTO_RESTART = 1 #\u6253\u5f00\u5b9e\u4f8b\u7684\u81ea\u52a8\u542f\u52a8\u529f\u80fd\nINST_STARTUP_CMD = /home/dmdba/dmdbms/bin/dmserver #\u547d\u4ee4\u884c\u65b9\u5f0f\u542f\u52a8\nRLOG_SEND_THRESHOLD = 0 #\u6307\u5b9a\u4e3b\u5e93\u53d1\u9001\u65e5\u5fd7\u5230\u5907\u5e93\u7684\u65f6\u95f4\u9600\u503c\uff0c\u9ed8\u8ba4\u5173\u95ed\nRLOG_APPLY_THRESHOLD = 0 #\u6307\u5b9a\u5907\u5e93\u91cd\u6f14\u65e5\u5fd7\u7684\u65f6\u95f4\u9600\u503c\uff0c\u9ed8\u8ba4\u5173\u95ed\n### \u8f6c\u6362\u63a7\u5236\u6587\u4ef6\u4e3a\u6587\u672c\u6587\u4ef6\uff1a\ndmctlcvt TYPE=1 SRC=/dmdata/data/DAMENG/dm.ctl DEST=/dmdata/data/DAMENG/dmctl.txt\n### \u542f\u52a8\u5b88\u62a4\u8fdb\u7a0b\uff1a\ncd /dmdata/data/DAMENG\nnohup dmwatcher /dmdata/data/DAMENG/dmwatcher.ini > w-nohup.out 2>&1 &\n# \ndisql SYSDBA/SYSDBA@127.0.0.1:5236\n-- SQL \u5904\u4e8eopen\u72b6\u6001\nselect STATUS$ from v$instance;\n#######################################################################################################################################\n\n\n#######################################################################################################################################\n##########################\n##########################\u5907\u5e93\u914d\u7f6e\n#\u5728\u4e3b\u5e93\u4e0a \nsu - dmdba\nscp -r ./BACKUP_FILE_01 dmdba@10.20.35.122:/dmdata/dmbak/\n# \u5728\u5907\u5e93\u4e0a\nsu - dmdba\nDmServiceDAMENG stop\ndmrman CTLSTMT=\"RESTORE DATABASE '/dmdata/data/DAMENG/dm.ini' FROM BACKUPSET '/dmdata/dmbak/BACKUP_FILE_01'\"\ndmrman CTLSTMT=\"RECOVER DATABASE '/dmdata/data/DAMENG/dm.ini' FROM BACKUPSET '/dmdata/dmbak/BACKUP_FILE_01'\"\ndmrman CTLSTMT=\"RECOVER DATABASE '/dmdata/data/DAMENG/dm.ini' UPDATE DB_MAGIC\"\n####################################\nvi /dmdata/data/DAMENG/dm.ini\n#\nINSTANCE_NAME = DMSERVER_STANDBY\nALTER_MODE_STATUS               = 0\nENABLE_OFFLINE_TS               = 2\nMAL_INI                         = 1                     #dmmal.ini\nARCH_INI                        = 1                     #dmarch.ini\n#################################### IP \u9700\u8981\u914d\u7f6e\u56fa\u5b9aIP\n#################################### IP \u9700\u8981\u914d\u7f6e\u56fa\u5b9aIP\n#################################### IP \u9700\u8981\u914d\u7f6e\u56fa\u5b9aIP  \u4e3b\u5e93\u548c\u5907\u5e93\u90fd\u662f\u4e00\u6837\nvi /dmdata/data/DAMENG/dmmal.ini\n#\nMAL_CHECK_INTERVAL     = 5\nMAL_COMBIN_BUF_SIZE    = 0\nMAL_SEND_THRESHOLD = 2048\nMAL_CONN_FAIL_INTERVAL = 5\nMAL_LOGIN_TIMEOUT      = 15\nMAL_BUF_SIZE           = 100\nMAL_SYS_BUF_SIZE       = 0\nMAL_VPOOL_SIZE         = 128\nMAL_COMPRESS_LEVEL     = 0\nMAL_TEMP_PATH          = \n[MAL_INST1]\nMAL_INST_NAME = DMSERVER_PRI #\u4e0edm.ini\u4e2d\u7684INSTANCE_NAME\u4e00\u81f4 \nMAL_HOST = 10.20.35.123 #MAL \u7cfb\u7edf\u76d1\u542c TCP \u8fde\u63a5\u7684 IP \u5730\u5740\nMAL_PORT = 5238 #MAL \u7cfb\u7edf\u76d1\u542c TCP \u8fde\u63a5\u7684\u7aef\u53e3\nMAL_INST_HOST = 10.20.35.123 #\u5b9e\u4f8b\u7684\u5bf9\u5916\u670d\u52a1 IP \u5730\u5740\nMAL_INST_PORT = 5236 # \u5b9e\u4f8b\u7684\u5bf9\u5916\u670d\u52a1\u7aef\u53e3\uff0c \u548cdm.ini \u4e2d\u7684 PORT_NUM \u4e00\u81f4\nMAL_INST_DW_PORT = 5237 #\u5b9e\u4f8b\u76d1\u542c\u5b88\u62a4\u8fdb\u7a0bTCP \u8fde\u63a5\u7684\u7aef\u53e3\nMAL_DW_PORT = 5239 #\u5b9e\u4f8b\u5bf9\u5e94\u7684\u5b88\u62a4\u8fdb\u7a0b\u76d1\u542c TCP \u8fde\u63a5\u7684\u7aef\u53e3\n[MAL_INST2]\nMAL_INST_NAME=DMSERVER_STANDBY # \u5b9e \u4f8b \u540d \uff0c \u548cdm.ini\u4e2d \u7684 INSTANCE_NAME \u4e00\u81f4\nMAL_HOST = 10.20.35.122 #MAL \u7cfb\u7edf\u76d1\u542c TCP \u8fde\u63a5\u7684 IP \u5730\u5740\nMAL_PORT = 5238 #MAL \u7cfb\u7edf\u76d1\u542c TCP \u8fde\u63a5\u7684\u7aef\u53e3\nMAL_INST_HOST = 10.20.35.122 #\u5b9e\u4f8b\u7684\u5bf9\u5916\u670d\u52a1 IP \u5730\u5740\nMAL_INST_PORT = 5236 # \u5b9e\u4f8b\u7684\u5bf9\u5916\u670d\u52a1\u7aef\u53e3\uff0c \u548cdm.ini \u4e2d\u7684 PORT_NUM \u4e00\u81f4\nMAL_INST_DW_PORT = 5237 #\u5b9e\u4f8b\u76d1\u542c\u5b88\u62a4\u8fdb\u7a0bTCP \u8fde\u63a5\u7684\u7aef\u53e3\nMAL_DW_PORT = 5239 #\u5b9e\u4f8b\u5bf9\u5e94\u7684\u5b88\u62a4\u8fdb\u7a0b\u76d1\u542c TCP \u8fde\u63a5\u7684\u7aef\u53e3\n\n\n#################################### \u5f52\u6863\u914d\u7f6e \nvi /dmdata/data/DAMENG/dmarch.ini\n#   \u5f52\u6863\u914d\u7f6e\u4e2d\u8981\u5305\u62ec\u672c\u5730\u5f52\u6863\u53ca\u5176\u4ed6\u51e0\u4e2a\u8282\u70b9\u7684\u5b9e\u65f6\u5f52\u6863\n    ARCH_WAIT_APPLY      = 0\n[ARCHIVE_LOCAL1]\n    ARCH_TYPE            = LOCAL    #\u672c\u5730\u5f52\u6863\u7c7b\u578b    \n    ARCH_DEST            = /dmdata/arch   #\u672c\u5730\u5f52\u6863\u6587\u4ef6\u5b58\u653e\u8def\u5f84     \n    ARCH_FILE_SIZE       = 128        #\u5355\u4f4d Mb \uff0c\u672c\u5730\u5355\u4e2a\u5f52\u6863\u6587\u4ef6\u6700\u5927\u503c\n    ARCH_SPACE_LIMIT     = 0        #\u5355\u4f4d Mb \uff0c0  \u8868\u793a\u65e0\u9650\u5236\uff0c\u8303\u56f4 1024~4294967294M\n    ARCH_FLUSH_BUF_SIZE  = 0        \n    ARCH_HANG_FLAG       = 1   \n[ARCHIVE_REALTIME1]\n    ARCH_TYPE            = REALTIME   #\u5b9e\u65f6\u5f52\u6863\u7c7b\u578b\n    ARCH_DEST            = DMSERVER_PRI #\u5b9e\u65f6\u5f52\u6863\u76ee\u6807\u5b9e\u4f8b\u540d\n    WAIT_APPLY           = 0        \n    ARCH_FAILOVER        = 0\n## \u542f\u52a8\u5b9e\u4f8b\u5e76\u914d\u7f6e\u5907\u5e93\u6a21\u5f0f\n# \u9700\u8981\u542f\u52a8\u6570\u636e\u5e93 mount\u6a21\u5f0f\nDmServiceDAMENG start mount\n#\ndisql SYSDBA/SYSDBA@127.0.0.1:5236\n#\n--SQL\u547d\u4ee4\nSP_SET_PARA_VALUE(1, 'ALTER_MODE_STATUS', 1); \nsp_set_oguid(20220607);\nALTER DATABASE STANDBY;\nSP_SET_PARA_VALUE(1, 'ALTER_MODE_STATUS', 0);\nexit\n# \u5982\u679c\u663e\u793a\u5904\u4e8e\u4e3b\u5e93\u914d\u7f6e\u72b6\u6001 \u8868\u793a\u6210\u529f\ndisql SYSDBA/SYSDBA@127.0.0.1:5236\n-- SQL \u5907\u5e93 \u5904\u4e8emount\u72b6\u6001\nselect STATUS$ from v$instance;\nexit\n#\nDmServiceDAMENG stop\nDmServiceDAMENG start\n#################################### \u5b88\u62a4\u8fdb\u7a0b\u914d\u7f6e \nvi /dmdata/data/DAMENG/dmwatcher.ini\n#\n[GRP1] #\u96c6\u7fa4\u7ec4\u7684\u540d\u79f0\nDW_TYPE = GLOBAL #\u5168\u5c40\u5b88\u62a4\u7c7b\u578b\nDW_MODE = MANUAL #\u624b\u52a8\u5207\u6362\u6a21\u5f0f\uff0c\u81ea\u52a8\u5207\u6362\uff1aAUTO\nDW_ERROR_TIME = 10 #\u8fdc\u7a0b\u5b88\u62a4\u8fdb\u7a0b\u6545\u969c\u8ba4\u5b9a\u65f6\u95f4\nINST_RECOVER_TIME = 60 #\u4e3b\u5e93\u5b88\u62a4\u8fdb\u7a0b\u542f\u52a8\u6062\u590d\u7684\u95f4\u9694\u65f6\u95f4\nINST_ERROR_TIME = 10 #\u672c\u5730\u5b9e\u4f8b\u6545\u969c\u8ba4\u5b9a\u65f6\u95f4\nINST_OGUID = 20220607 #\u5b88\u62a4\u7cfb\u7edf\u552f\u4e00OGUID\u503c\nINST_INI = /dmdata/data/DAMENG/dm.ini #dm.ini  \u914d\u7f6e\u6587\u4ef6\u8def\u5f84\nINST_AUTO_RESTART = 1 #\u6253\u5f00\u5b9e\u4f8b\u7684\u81ea\u52a8\u542f\u52a8\u529f\u80fd\nINST_STARTUP_CMD = /home/dmdba/dmdbms/bin/dmserver #\u547d\u4ee4\u884c\u65b9\u5f0f\u542f\u52a8\nRLOG_SEND_THRESHOLD = 0 #\u6307\u5b9a\u4e3b\u5e93\u53d1\u9001\u65e5\u5fd7\u5230\u5907\u5e93\u7684\u65f6\u95f4\u9600\u503c\uff0c\u9ed8\u8ba4\u5173\u95ed\nRLOG_APPLY_THRESHOLD = 0 #\u6307\u5b9a\u5907\u5e93\u91cd\u6f14\u65e5\u5fd7\u7684\u65f6\u95f4\u9600\u503c\uff0c\u9ed8\u8ba4\u5173\u95ed\n### \u8f6c\u6362\u63a7\u5236\u6587\u4ef6\u4e3a\u6587\u672c\u6587\u4ef6\uff1a\ndmctlcvt TYPE=1 SRC=/dmdata/data/DAMENG/dm.ctl DEST=/dmdata/data/DAMENG/dmctl.txt\n### \u542f\u52a8\u5b88\u62a4\u8fdb\u7a0b\uff1a\ncd /dmdata/data/DAMENG\nnohup dmwatcher /dmdata/data/DAMENG/dmwatcher.ini > w-nohup.out 2>&1 &\n# \ndisql SYSDBA/SYSDBA@127.0.0.1:5236\n-- SQL \u5904\u4e8eopen\u72b6\u6001\nselect STATUS$ from v$instance;\n#######################################################################################################################################\n\n\n\n#######################################################################################################################################\n####################\u786e\u8ba4\u76d1\u89c6\u5668\u914d\u7f6e\n# \u76d1\u89c6\u5668\u653e\u5728\u5907\u4e0a\nsu - dmdba\nmkdir -p /dmdata/data/monitor-log\nvi /dmdata/data/DAMENG/dmmonitor.ini\n#\nMON_DW_CONFIRM = 1 #\u786e\u8ba4\u76d1\u89c6\u5668\u6a21\u5f0f\nMON_LOG_PATH = /dmdata/data/monitor-log/ #\u76d1\u89c6\u5668\u65e5\u5fd7\u6587\u4ef6\u5b58\u653e\u8def\u5f84\uff0c\u6ca1\u6709\u5219\u9700\u8981\u521b\u5efa\nMON_LOG_INTERVAL = 60 #\u6bcf\u9694 60s  \u5b9a\u65f6\u8bb0\u5f55\u7cfb\u7edf\u4fe1\u606f\u5230\u65e5\u5fd7\u6587\u4ef6\nMON_LOG_FILE_SIZE = 32 #\u6bcf\u4e2a\u65e5\u5fd7\u6587\u4ef6\u6700\u5927 32M\nMON_LOG_SPACE_LIMIT = 0 #\u4e0d\u9650\u5b9a\u65e5\u5fd7\u6587\u4ef6\u603b\u5360\u7528\u7a7a\u95f4\n[GRP1]\nMON_INST_OGUID = 20220607    #\u7ec4 GRP1\u7684\u552f\u4e00OGUID\u503c\uff0c\u4e0e\u4e4b\u524d\u5404\u8282\u70b9\u7684sp_set_oguid(20220607)\u4e00\u81f4\nMON_DW_IP = 10.20.35.123:5239\nMON_DW_IP = 10.20.35.122:5239\n\n# \u542f\u52a8\u76d1\u89c6\u5668\n#\u4e3b\u8981\u5173\u6ce8\uff1aWSTATUS\u662f\u5426OPEN\uff0cRSTAT\u662f\u5426VALID\u3002\ncd /dmdata/data/DAMENG\nnohup dmmonitor /dmdata/data/DAMENG/dmmonitor.ini > m-nohup.out 2>&1 &\n#######################################################################################################################################\n\n#######################################################################################################################################\n################## \u4e3b\u5907\u540c\u6b65\u6d4b\u8bd5\n# \u4e3b\u5e93\u4e0a\u6267\u884c\ndisql SYSDBA/SYSDBA@127.0.0.1:5236\n#\nCREATE TABLE TAB_FOR_RECOVER(C1 INT,create_time datetime);\nINSERT INTO TAB_FOR_RECOVER VALUES(1,sysdate);\nINSERT INTO TAB_FOR_RECOVER VALUES(2,sysdate);\nINSERT INTO TAB_FOR_RECOVER VALUES(3,sysdate);\ncommit;\n--\u9700\u8981\u63d0\u4ea4\u4e8b\u52a1\u540e\u624d\u4f1a\u540c\u6b65\u5230\u5907\u8282\u70b9\n# \u5907\u5e93\u4e0a\u6267\u884c\ndisql SYSDBA/SYSDBA@127.0.0.1:5236\n#\nselect * from TAB_FOR_RECOVER;\n#######################################################################################################################################\n\n#######################################################################################################################################\n####################\u666e\u901a\u76d1\u89c6\u5668\u914d\u7f6e\n# \u76d1\u89c6\u5668\u653e\u5728\u5907\u4e0a\nsu - dmdba\nmkdir -p /dmdata/data/monitor-log-look\nvi /dmdata/data/DAMENG/dmmonitor_look.ini\n#\nMON_DW_CONFIRM = 0 #\u786e\u8ba4\u76d1\u89c6\u5668\u6a21\u5f0f\nMON_LOG_PATH = /dmdata/data/monitor-log/ #\u76d1\u89c6\u5668\u65e5\u5fd7\u6587\u4ef6\u5b58\u653e\u8def\u5f84\uff0c\u6ca1\u6709\u5219\u9700\u8981\u521b\u5efa\nMON_LOG_INTERVAL = 60 #\u6bcf\u9694 60s  \u5b9a\u65f6\u8bb0\u5f55\u7cfb\u7edf\u4fe1\u606f\u5230\u65e5\u5fd7\u6587\u4ef6\nMON_LOG_FILE_SIZE = 32 #\u6bcf\u4e2a\u65e5\u5fd7\u6587\u4ef6\u6700\u5927 32M\nMON_LOG_SPACE_LIMIT = 0 #\u4e0d\u9650\u5b9a\u65e5\u5fd7\u6587\u4ef6\u603b\u5360\u7528\u7a7a\u95f4\n[GRP1]\nMON_INST_OGUID = 20220607    #\u7ec4 GRP1\u7684\u552f\u4e00OGUID\u503c\uff0c\u4e0e\u4e4b\u524d\u5404\u8282\u70b9\u7684sp_set_oguid(20220607)\u4e00\u81f4\nMON_DW_IP = 10.20.35.123:5239\nMON_DW_IP = 10.20.35.122:5239\n\n# \u542f\u52a8\u76d1\u89c6\u5668\n#\u4e3b\u8981\u5173\u6ce8\uff1aWSTATUS\u662f\u5426OPEN\uff0cRSTAT\u662f\u5426VALID\u3002\ncd /dmdata/data/DAMENG\ndmmonitor /dmdata/data/DAMENG/dmmonitor_look.ini\n#######################################################################################################################################\n\n\n#######################################################################################################################################\n# \nvi /dmdata/data/DAMENG/dm.ini\n# \u8c03\u6574\u8fd9\u4e2a\u51e0\u4e2a\u53c2\u6570 \u8981\u4e0d\u7136\u62a5\u9519 Out of sort buf space, try to adjust SORT_BUF_GLOBAL_SIZE, SORT_BUF_SIZE, SORT\n# SORT_FLAG\uff1a\u9ed8\u8ba4\u4e3a0\uff0c\u53c2\u6570\u542b\u4e49\uff1a0\uff1a\u539f\u6392\u5e8f\u673a\u5236\uff1b1\uff1a\u65b0\u6392\u5e8f\u673a\u5236\u3002 \u5728\u5185\u5b58\u5927\u4e8e64G\u65f6\u5efa\u8bae\u4f7f\u7528\u65b0\u6392\u5e8f\u673a\u5236\uff0c\u5176\u4ed6\u60c5\u51b5\u4f7f\u7528\u539f\u6392\u5e8f\u673a\u5236\u3002\n# SORT_BUF_SIZE\uff1a\u9ed8\u8ba4\u4e3a2\u3002\u5728\u5185\u5b58\u5c0f\u4e8e64G\u65f6\u5efa\u8bae\u8bbe\u7f6e\u4e3a10M\uff0c\u5927\u4e8e64G\u65f6\u5efa\u8bae\u8bbe\u7f6e\u4e3a512M\u3002\n# SORT_BUF_GLOBAL_SIZE\uff0c\u9ed8\u8ba4\u4e3a1000M\u3002\u5f53\u5185\u5b58\u5c0f\u4e8e16G\u65f6\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a500M\uff0c\u5927\u4e8e16G\u5c0f\u4e8e64G\u65f6\u5efa\u8bae\u8bbe\u7f6e\u4e3a2000\uff0c\u5f53\u5185\u5b58\u5927\u4e8e64G\u65f6\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a5120M\u3002\n# SORT_BLK_SIZE\uff1a\u9ed8\u8ba4\u4e3a 1M\uff0c\u65b0\u6392\u5e8f\u673a\u5236\u4e0b\uff0c\u6bcf\u4e2a\u6392\u5e8f\u5206\u7247\u7a7a\u95f4\u7684\u5927\u5c0f\uff0c\u5fc5\u987b\u5c0f\u4e8e SORT_BUF_GLOBAL_SIZE\u3002\nSORT_BUF_SIZE                   = 512                    #maximum sort buffer size in Megabytes\nSORT_BLK_SIZE                   = 2                     #maximum sort blk size in Megabytes\nSORT_BUF_GLOBAL_SIZE            = 5120                  #maximum global sort buffer size in Megabytes\n#######################################################################################################################################\n\n\n\n")))}T.isMDXComponent=!0}}]);