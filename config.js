const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "237677107384" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237677107384";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,237677107384";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_16_04_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY2LFxuICAgICAgICA4NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwLFxuICAgICAgICA1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDYwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDY1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYwLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM4LFxuICAgICAgICA5MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMwLFxuICAgICAgICA0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODksXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0RzBScWIrODY3NUV0Q25FTEhyckdlSUdvMU9aWmFpbTN5dkNaZ3FWM1RVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlR0l3OC1sX1FNeTR6ay1KZFA1aEVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYyMTc2ZmVmLTE1MTktNGYwNy05NGU2LTcwNmJjZGY0YzU0OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDYsXG4gICAgICAxOCxcbiAgICAgIDE5MSxcbiAgICAgIDMsXG4gICAgICAxOTUsXG4gICAgICAxMjUsXG4gICAgICA1NyxcbiAgICAgIDE2OCxcbiAgICAgIDE4MCxcbiAgICAgIDEwNCxcbiAgICAgIDE0LFxuICAgICAgMjMwLFxuICAgICAgMjYsXG4gICAgICAyMTUsXG4gICAgICAzNSxcbiAgICAgIDE3NixcbiAgICAgIDIwMSxcbiAgICAgIDEzNyxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDE2MyxcbiAgICAgIDEzNSxcbiAgICAgIDE5NyxcbiAgICAgIDIyMyxcbiAgICAgIDcwLFxuICAgICAgMixcbiAgICAgIDE5MSxcbiAgICAgIDE3NixcbiAgICAgIDE2OCxcbiAgICAgIDEzMyxcbiAgICAgIDEwNixcbiAgICAgIDE4MixcbiAgICAgIDgzLFxuICAgICAgNzYsXG4gICAgICAyMzgsXG4gICAgICAzNyxcbiAgICAgIDExNyxcbiAgICAgIDE0MSxcbiAgICAgIDgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhYOEg0VFdLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTc2MTU3Mjk6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQzOTgwOTAxMzc2MDk2OjMwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05hRTJ1UUJFUHVvK3I4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR3pjOUhubGNRQlhJUXE4OWFEckZNbUIzTlRZbVo4RmgwcG1VTGZwMk9XWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkTnBtUkIrR2NhbWYvYTJPb2ZsQ2ZtanQwOWw4Qy9rRkxqak9UZXdHc2N4NzZISWYvczJvakpsaTA3bGpvTGVqZit6bUg2eC85MHc3SFlIbnZseVVBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxb1MveUR1K2c2bjUrWHRpWlVWbEYvL0MwcVRnRjEwaFQrUEwwY3BiQ2E4R1I3TzBYd1F1MVVTQXRUNDhuSGkxNU5FSk1iR0xINmhWa2FjYi8vUmlEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2OTc2MTU3Mjk6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQ3Mzc0MDhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "MR XENONE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
