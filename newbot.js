const{
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
MimetypeMap,
WALocationMessage,
ChatModification,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime
} = require('@adiwajshing/baileys')
const simple = require("./lib/simple.js");
const util = require('util');
const axios = require("axios");
const crypto = require('crypto');
const imgbb = require('imgbb-uploader');
const Math_js = require('mathjs');
const fs = require('fs');
const qrcode = require('qrcode-terminal');
const qrkode = require("qrcode");
const request = require('request');
const requests = require("node-fetch");
const moment = require('moment-timezone');
const { spawn, exec } = require('child_process');
const fetch = require('node-fetch');
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const googleIt = require('google-it');
const googleImage = require('g-i-s');
const yts = require( 'yt-search');
const cheerio = require('cheerio');
const ffmpeg = require('fluent-ffmpeg');
const imageToBase64 = require('image-to-base64');
const toMs = require("ms");
const ms = require("parse-ms");
const WAConnection = simple.WAConnection(_WAConnection);
const { smsg } = require('./lib/simple.js')
const { color, bgcolor } = require('./lib/color')
const game = require("./lib/game");
const { dafontDown, dafontSearch } = require('./lib/dafont')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { pShadow, pRomantic, pSmoke, pBurnPapper, pNaruto, pLoveMsg, pMsgGrass, pGlitch, pDoubleHeart, pCoffeCup, pLoveText, pButterfly } = require('./lib/photooxy')
const {  
fetchJson, 
getBase64, 
createExif 
} = require('./lib/fetcher')
const { 
yta,
ytv,
buffer2Stream,
ytsr,
baseURI,
stream2Buffer,
noop 
} = require('./lib/ytdl')
const { mediafireDl } = require('./lib/mediafire')
const { Otakudesu } = require('./lib/otakudesu')
const { pinterest } = require('./lib/pinterest')
const { recognize } = require('./lib/ocr')
const { webp2mp4File} = require('./lib/webp2mp4')
const { webp2gifFile } = require("./lib/gif.js")
const tovid = require('./lib/tovideo')
const hx = require('./lib/NOAMPI')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { menu } = require('./lib/menu')
const _prem = require("./lib/premium");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
/******************************* By Resta Gw Add no api semua yaa *******************************/
const error = JSON.parse(fs.readFileSync('./database/error.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const limit = JSON.parse(fs.readFileSync('./database/limit.json'));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
const welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const tmp_hit = JSON.parse(fs.readFileSync('./src/hit.json'))
const tmphit = JSON.parse(fs.readFileSync('./src/today.json'))
const _claim = JSON.parse(fs.readFileSync('./database/claim.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`]
namabot = setting.namabot
namaowner = setting.namaowner
lolkey = setting.lolhuman
prefix = ''
blocked = []
let tebakgambar = []; //JAN UBAH
let family100 = []; //JAN UBAH
let mtk = []; //JAN UBAH 
let tebaklirik = [];  
let siapaaku = [];
let tebakkata = [];
let tebakkimia = [];
let tebakbendera = [];
let tebakanime = [];
ctc = '›'
shp = '🌹'
fake = '𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 Restaシ︎'  
baterai = {
    baterai: 0,
    cas: false 
}
fakeimage = fs.readFileSync('./src/fake.jpg')
let {    
    gamewaktu,
    limitCount
} = require('./src/settings')
/******************************* Data Basenya taruh sni jadi biar detec dluan******************************/
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Resta シ︎\n'
            + 'ORG:Owner Resta;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6283853152230:+6283853152230\n'
            + 'END:VCARD'
//******************** 》Vcard《 ********************\\
    const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function kyun(seconds){
     function pad(s){
     return (s < 10 ? '0' : '') + s;
      }
     var hours = Math.floor(seconds / (60*60));
     var minutes = Math.floor(seconds % (60*60) / 60);
     var seconds = Math.floor(seconds % 60);
     return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
     }
    async function starts() {
	const Resta = new WAConnection()
	Resta.logger.level = 'warn'
    console.log('>', '[',color('INFO','blue'),']','SEDANG MENGHUBUNGKAN')
    console.log('>', '[',color('INFO','blue'),']','Configure Connection...')
    console.log('>', '[',color('INFO','blue'),']','Configure Success, Connecting...')
	Resta.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})
	fs.existsSync('./catbot.json') && Resta.loadAuthInfo('./catbot.json')
	Resta.on('connecting', () => {
	start('2', 'Connecting...')
	})
	Resta.on('open', () => {
	success('2', 'Connected')
	}) 
	await Resta.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./catbot.json', JSON.stringify(Resta.base64EncodedAuthInfo(), null, '\t'))
        
    
Resta.on('group-participants-update', async (anu) => {
    if (!welcome.includes(anu.jid)) return
    try {
	const mdata = await Resta.groupMetadata(anu.jid)
	console.log(anu)
	if (anu.action == 'add') {
	num = anu.participants[0]
	try {
	ppimg = await Resta.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
	} catch {
	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = `Halo @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*`
	let buff = await getBuffer(ppimg)
	Resta.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
	} else if (anu.action == 'remove') {
	num = anu.participants[0]
	try {
    ppimg = await Resta.getProfilePicture(`${num.split('@')[0]}@c.us`)
    } catch {
	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = `Sayonara @${num.split('@')[0]}👋`
	let buff = await getBuffer(ppimg)
	Resta.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
	}
	} catch (e) {
	console.log('Error : %s', color(e, 'red'))
	}
	})
	const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
	}
	/******************************* CALL BLOCK & BATTRE *******************************/
	Resta.on('CB:Blocklist', json => {
	if (blocked.length > 2) return
	for (let i of json[1].blocklist) {
	blocked.push(i.replace('c.us','s.whatsapp.net'))
	}
	})
    Resta.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
    ban.push(callerId)
    Resta.sendMessage(callerId, "Telpon = Block \nAnda di block Karna Telpon Bot \nSilahkan Chat ownerku untuk membuka block!\nwa.me/6282138919347", MessageType.text)
    await sleep(5000)
    blocked.push(callerId)
    await Resta.blockUser(callerId, "add") // Block user
     })
     Resta.on("CB:action,,battery", json => {
	  const battery = json[2][0][1].value
	  const persenbat = parseInt(battery)
	  baterai.battery = `${persenbat}%`
	  baterai.isCharge = json[2][0][1].live
      })
            function monospace(string) {
             return '```' + string + '```'
             }   
             function jsonformat(string) {
             return JSON.stringify(string, null, 2)
             }
             function randomNomor(angka){
             return Math.floor(Math.random() * angka) + 1
             }
             const nebal = (angka) => {
             return Math.floor(angka)
             }
             
           Resta.on('chat-update', async (mek) => {
	        try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			m = smsg(Resta, mek)
			global.prefix
			global.blocked
			const { quotedMsg, mentioned } = mek
			const content = JSON.stringify(mek.message)
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const date = new Date().toLocaleDateString()
			const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		    const waktu = moment.tz('Asia/Jakarta').format('a')
		    const time = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
		    const cmod = (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId && m.quoted.sender === Resta.user.jid) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && mek.message.listResponseMessage.singleSelectReply.selectedRowId && m.quoted.sender === Resta.user.jid) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		    const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmod) ? cmod.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '/'
            Resta.chatRead(from) 
	        const body = (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && m.quoted.sender === Resta.user.jid) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && m.quoted.sender === Resta.user.jid) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
	        const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		    var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
            const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []
            const mentionUser = mention != undefined ? mention.filter(n => n) : []
            const q = args.join('  ')
            chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            const arg = chats.slice(command.length + 2, chats.length)
            const argss = body.split(/ +/g)
            const tescuk = ["0@s.whatsapp.net"]
            const ini_mark = `0@s.whatsapp.net`
		    const sender = mek.key.fromMe ? Resta.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
			const senderNumber = sender.split("@")[0]
		    const pushname = Resta.contacts[sender] != undefined ? Resta.contacts[sender].vname || Resta.contacts[sender].name || Resta.contacts[sender].notify : ''
    
    
            const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Resta.user.phone
            const botNumber = Resta.user.jid
            const botN = botNumber.replace('@s.whatsapp.net', '')
			const isGroup = from.endsWith('@g.us')
			const groupMetadata = isGroup ? await Resta.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isOwner = ownerNumber.includes(sender)
			const isClaimOn = _claim.includes(sender)
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelcome = isGroup ? welcome.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
			const gcounti = setting.gcount
            const gcount = isPremium ? gcounti.prem : gcounti.user
			const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
            }
			const reply = (teks) => {
	         Resta.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
		    Resta.sendMessage(hehe, teks, text)
			}
			const sendImage = (teks) => {
		    Resta.sendMessage(from, teks, image, {quoted: mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			Resta.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const senRestatt = (teks) => {
		    Resta.sendMessage(from, audio, mp3, {quoted: mek})
		    }
			const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? Resta.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Resta.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
    
    
           const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
           }
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
           });
           };
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Resta.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
    
fs.unlinkSync(filename)
});
}
        const sendFileFromUrl = async(link, type, options) => {
         hasil = await getBuffer(link).catch(e => {
	     fetch(link).then((hasil) => {
	     return Resta.sendMessage(from, hasil, type, options)
	     }).catch(e => {
	     Resta.sendMessage(from, { url : link }, type, options).catch(e => {
	     reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	     console.log(e)
	     }) 
         }) 
         })
	    Resta.sendMessage(from, hasil, type, options).catch(e => {
	    fetch(link).then((hasil) => {
	    Resta.sendMessage(from, hasil, type, options).catch(e => {
	    Resta.sendMessage(from, { url : link }, type, options).catch(e => {
	    reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	    console.log(e)
	     })
	     })
	     })
	     })
	     }
	     const sendStickerFromUrl = async(to, url) => {
         var names = Date.now() / 10000;
         var download = function (uri, filename, callback) {
         request.head(uri, function (err, res, body) {
         request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
         });
         };
        download(url, './src' + names + '.png', async function () {
        console.log('selesai');
        let filess = './src' + names + '.png'
        let asw = './src' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
        let media = fs.readFileSync(asw)
        Resta.sendMessage(to, media, MessageType.sticker,{quoted:mek})
        fs.unlinkSync(filess)
        fs.unlinkSync(asw)
         });
         });
         }
        const uploadImages = (buffData, type) => {
        return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
        if (err) return reject(err)
        console.log('Uploading image to telegra.ph server...')
        const fileData = fs.readFileSync(filePath)
        const form = new FormData()
        form.append('file', fileData, 'tmp.' + ext)
        fetch('https://telegra.ph/upload', {
        method: 'POST',
        body: form
        })
       .then(res => res.json())
       .then(res => {
        if (res.error) return reject(res.error)
        resolve('https://telegra.ph' + res[0].src)
        })
       .then(() => fs.unlinkSync(filePath))
       .catch(err => reject(err))
         })
         })
         }
        const sendButtonLoc = (from, title, text, desc, button, mek, men, file) => {
        return Resta.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
         }
       if (isCmd && isGroup) {
       tmp_hit.push(command)
       fs.writeFileSync('./src/hit.json', JSON.stringify(tmp_hit))
       tmphit.push(command)
       fs.writeFileSync('./src/today.json', JSON.stringify(tmphit))
        }
        _prem.expiredCheck(premium)
    
      function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
    
game.cekWaktuFam(Resta, family100)
game.cekWaktuTG(Resta, tebakgambar)
game.cekWaktuMtk(Resta, mtk) 
game.cekWaktuTL(Resta, tebaklirik)
game.cekWaktuSA(Resta, siapaaku)
game.cekWaktuTK(Resta, tebakkata)
game.cekWaktuTU(Resta, tebakkimia)
game.cekWaktuTB(Resta, tebakbendera)
game.cekWaktuTA(Resta, tebakanime)

if (game.isMtk(from, mtk)){
if (chats.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
var htgm3 = randomNomor(1000)
addBalance(sender, htgm3, balance)
await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMtk(from, mtk)}\n*Hadiah :* $${htgm3}\n\nIngin bermain lagi? kirim *${prefix}math*`)
mtk.splice(game.getMtkPosi(from, mtk), 1)
}
}    
if (game.isTebakLirik(from, tebaklirik)){
if (chats.toLowerCase().includes(game.getJawabanTL(from, tebaklirik))){
var htgml = randomNomor(100)
addBalance(sender, htgml, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐋𝐈𝐑𝐈𝐊
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTL(from, tebaklirik)}\n*Hadiah :* $${htgml}
Ingin bermain lagi? kirim *${prefix}tebaklirik*`)
tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
}
} 
if (game.isSiapaAku(from, siapaaku)){
if (chats.toLowerCase().includes(game.getJawabanSA(from, siapaaku))){
var htgmu = randomNomor(100)
addBalance(sender, htgmu, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐒𝐈𝐀𝐏𝐀𝐊𝐀𝐇 𝐀𝐊𝐔
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSA(from, siapaaku)}\n*Hadiah :* $${htgmu}
Ingin bermain lagi? kirim *${prefix}siapakahaku*`)
siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
}
}
if (game.isTebakKata(from, tebakkata)){
if (chats.toLowerCase().includes(game.getJawabanTK(from, tebakkata))){
var htgtk = randomNomor(100)
addBalance(sender, htgtk, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐊𝐀𝐓𝐀
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTK(from, tebakkata)}\n*Hadiah :* $${htgtk}
Ingin bermain lagi? kirim *${prefix}tebakkata*`)
tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
}
}
if (game.isTebakKimia(from, tebakkimia)){
if (chats.toLowerCase().includes(game.getJawabanTU(from, tebakkimia))){
var reva = randomNomor(100)
addBalance(sender, reva, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐔𝐍𝐒𝐔𝐑 𝐊𝐈𝐌𝐈𝐀
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTU(from, tebakkimia)}\n*Hadiah :* $${reva}
Ingin bermain lagi? kirim *${prefix}tebakkimia*`)
tebakkimia.splice(game.getTUPosi(from, tebakkimia), 1)
}
}
if (game.isTebakBendera(from, tebakbendera)){
if (chats.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
var syahira = randomNomor(100)
addBalance(sender, syahira, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐁𝐄𝐍𝐃𝐄𝐑𝐀
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTB(from, tebakbendera)}\n*Hadiah :* $${syahira}
Ingin bermain lagi? kirim *${prefix}tebakbendera*`)
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
}
}
if (game.isTebakAnime(from, tebakanime)){
if (chats.toLowerCase().includes(game.getJawabanTA(from, tebakanime))){
var vinna = randomNomor(100)
addBalance(sender, vinna, balance)
await reply(`𝐆𝐀𝐌𝐄 𝐓𝐄𝐁𝐀𝐊 𝐀𝐍𝐈𝐌𝐄
*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTA(from, tebakanime)}\n*Hadiah :* $${vinna}
Ingin bermain lagi? kirim *${prefix}tebakanime*`)
tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
}
} 	        
if (game.isTebakGambar(from, tebakgambar) && isUser){
if (chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
var htgm = randomNomor(100)
addBalance(sender, htgm, balance)
await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
}
}
if (game.isfam(from, family100)){
var anjuy = game.getjawaban100(from, family100)
for (let i of anjuy){
if (chats.toLowerCase().includes(i)){
var htgm1 = randomNomor(1000)
addBalance(sender, htgm1 , balance)
await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgm1}\n\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
}
}
if (anjuy.length < 1){
Resta.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
family100.splice(game.getfamposi(from, family100), 1)
}
}   
    
            colors = ['red','white','black','blue','yellow','green']
            const isViewOnce = (type == 'viewOnceMessage')
            const isMedia = (type === 'imageMessage' || type === 'videoMessage')
            const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
            const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
            const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
            const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (isCmd && !isGroup) {
            addBalance(sender, randomNomor(20), balance)
			console.log(color('[CMD]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`))
             }
            if (isCmd && isGroup) {
            addBalance(sender, randomNomor(20), balance)
			console.log(color('[CMD]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
             }

           
             if (isGroup && isAntilink) {
             if (budy.includes("://chat.whatsapp.com/")) {
             if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
             if (isBotGroupAdmins) return reply(`${namabot} harus menjadi admin terlebih dahulu`) 
             console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
             reply(`「 *ANTILINK GROUP DETECTOR* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
             setTimeout(() => {
             Resta.groupRemove(from, [sender])
             }, 2000);
             }
             }
             
            try{
            if(error.includes(command)){
            return reply('Fitur Tersebut sedang error\nKami akan segera memperbaikinya!')
            }
            }catch{
            }        
            mess = {
            wait: 'Scraping metadata.....',
            search: 'Searching...',
            limit: `[❕] Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`,
            eror: 'Eror To Again',
            claimOnAlready: `Kamu sudah melakukan claim sebelumnya, Harap claim lagi di esok hari.`,
            success: '✔️ Berhasil ✔️',
            error: {
            stick: 'Ulangi bang',
            Iv: 'Link tidak valid'
            },
            only: {
            prem : 'Premium special features! Chat owner to get Premium access!',
            group: 'Fitur Dapat digunakan di Dalam Group!',
            ownerG: 'Fitur Dapat digunakan oleh Owner Group!',
            ownerB: 'Fitur Khusus Owner Bot!',
            admin: 'Fitur dapat Digunakan oleh Admin Group!',
            Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!'
            }
            }

                function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
				"sticker-pack-name": packname,
				"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
				let len = JSON.stringify(json).length	
				let last	
				if (len > 256) {	
				len = len - 256	
				bytes.unshift(0x01)	
				} else {	
				bytes.unshift(0x00)	
				}	
				if (len < 16) {	
				last = len.toString(16)	
				last = "0" + len	
				} else {	
				last = len.toString(16)	
				}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	
			}

  switch(command) {
case 'menu': case 'help':
usrr = `@${sender.split("@")[0]}`
glimm = `${cekGLimit(sender, gcount, glimit)}/${gcount}`
blan = `${getBalance(sender, balance)}`
hitnya = `${tmp_hit.length}`
Time = `${time}`
Waktu = `${waktu}`
Tanggal = `${tanggal}`
limm = `${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}`
teks = `${menu(Time,Waktu,Tanggal,hitnya,limm,glimm,blan,usrr,pushname,error,prefix)}\n\n ------- PERBAIKAN -------\n\n`
e = 0
for (let i of error) {
teks += `   ${e+=1}. ${i}\n`
   }
teks += ``
sendButtonLoc(from,monospace(teks),'',`${fake}`,[
{buttonId: `${prefix}owner`, buttonText: {displayText: '</OWNER'}, type: 1}
],null,null,fakeimage,mek)
break
/*****************************PUNYA OWNER******************************/
           case 'owner': 
                    Resta.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact ,{ quoted : mek})
                   .then((res) => Resta.sendMessage(from, 'Nih kontak ownerku', text, {quoted: res}))
                    break
            case 'clearall':
					if (!isOwner) return reply(mess.only.ownerB) 
					let chiit = await Resta.chats.all()
                    for (let i of chiit){
                    Resta.modifyChat(i.jid, 'delete', {
                    includeStarred: false
                    }) 
                    }
					reply('Sukses delete all chat :)') 
					break
					case 'bc':
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await Resta.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					buff = await Resta.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					Resta.sendMessage(_.jid, buff, image, {caption: `[ Broadcast ]\n\n${body.slice(4)}`})
					}
					reply('Suksess broadcast')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `[ Broadcast ]\n\n${body.slice(4)}`)
					}
					reply('Suksess broadcast')
					}
					break
		   case 'claim':   
            case 'klaim':
                    if (isClaimOn) return reply(mess.claimOnAlready)
                    var htgm6 = randomNomor(1000)
                    var htgm7 = randomNomor(20)
                    addBalance(sender, htgm6, balance)
                    giveLimit(sender, htgm7, balance)
                    _claim.push(sender)
                    fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                    await reply(`*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *${htgm7}* Limit & *${htgm6}* balance
Dari claim harian`)
                    break
			case 'resetlimit':
				         if (!isOwner) return reply(mess.only.owner)
				         var obj = [] 
                         fs.writeFileSync('./database/claim.json', JSON.stringify(obj))
				         fs.writeFileSync('./database/limit.json', JSON.stringify(obj)) 
				         await reply(`LIMIT BERHASIL DI RESET`)
			             break 
			   case 'ping':
                   let totalchat = await Resta.chats.all()
                   let i = []
                   let giid = []
                   for (let mem of totalchat){
                   i.push(mem.jid)
                   }
                   for (let id of i){
                   if (id && id.includes('g.us')){
                   giid.push(id)
                    }
                    }
                   inifernazer =
 `「 *STATUS CHAT* 」
            
• Group Chats: ${giid.length}
• Personal Chats: ${totalchat.length - giid.length}
• Total Chats: ${totalchat.length}
• Charger: ${baterai.isCharge}
• Penggunaan RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB

「 *STATUS HP BOT* 」

• Battery: ${baterai.battery}  ${baterai.isCharge === 'true' ? '_Sedang Di Cas_' : '_Tidak Di Cas_'}
• wa_version: ${wa_version}
• mcc: ${mcc}
• mnc: ${mnc}
• os_version: ${os_version}
• device_manufacturer: ${device_manufacturer}
• device_model: ${device_model}
• runtime: ${runtime(process.uptime())}`
             sendButtonLoc(from,monospace(inifernazer),'',`${fake}`,[
              {buttonId: `${prefix}owner`, buttonText: {displayText: '</OWNER'}, type: 1}, 
              {buttonId: `${prefix}menu`, buttonText: {displayText: '</MENU'}, type: 1}
               ],null,null,fakeimage,mek)
           break
		  case 'addprem':
          case 'addprem':
                   if (!isOwner)return mentions(`Perintah ini Khusus owner`) 
                   if (!q)return reply(`*Format Error!*\n\n*Example :*\n• *${prefix + command} @tag 10d*\n\n*Note :*\n• s : detik\n• m : menit\n• h : jam\n• d : hari\n\n*Tq To : ${fake}*`)
                   expired = q.split(" ")[1]
                   const pnom = {id: `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`,expired: Date.now() + toMs(expired) }
                  premium.push(pnom) 
                  fs.writeFileSync('./database/premium.json',JSON.stringify(premium))
                  reply(`_Succses_`)
                  break
         case 'delprem':
                    if(!isOwner) return reply('Only Owner!')
                    user = q.split('@')[1] + '@s.whatsapp.net'
                    for(let i=0; i<premium.length; i++){
                    if(user.includes(premium[i].id)){
                    let del = premium.indexOf(premium[i])
                    premium.splice(del, 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    mentions(`Succes delete premium @${user.split("@")[0]}`,[user],true)
                    }
                    }
                    break
        case 'listprem':
                   if(!isGroup)return reply(mess.only.group)
                   Resta.updatePresence(from, Presence.composing)
                   let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
                   let men = [];
                   for (let i of premium){
                   men.push(i.id)
                   let cekvip = ms(i.expired - Date.now())
                   txt += `*ID :* @${i.id.split("@")[0]}\n*Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                   }
                   mentions(txt, men, true)
                   break
        case 'cekprem': case 'cekpremium':
                   if (!isPremium) return reply(`Kamu bukan user premium`)
                   let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                   let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
                   try {
                   ppimg = await Resta.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                   } catch {
                   ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                   }
                   teks = `❒ *「 Premium User 」* ❒ 
  
 *Nama : ${pushname}*
 *Tag : @${sender.split("@")[0]}*
 *Expired : ${premiumnya}*`
                    its = await getBuffer (ppimg)
                    Resta.sendMessage(from, its, image, {contextInfo: { forwardingScore: 9999, isForwarded: false, mentionedJid: [sender]},quoted: mek, caption: teks
                     })
                     break
                     case 'me': case 'profile':
try {
ppimg = await Resta.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
const prmm = isPremium ? `${cekprm.days} day ${cekprm.hours} hour ${cekprm.minutes} minute ${cekprm.seconds} second`:'Not Premium'
teks = `❒ *「 Profile User 」* ❒ 

❒ *「 User ${pushname} 」*
├ *Tag : @${sender.split("@")[0]}*
├ *Status : ${isPremium ? 'Premium':'Free'}*
├ *Status Bot : ${isOwner ? 'Owner':'User'}*
├ *Expired : ${prmm}*
├ *Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}*
├ *Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}*
└ *Balance User : $${getBalance(sender, balance)}*`
its = await getBuffer (ppimg)
Resta.sendMessage(from, its, image, {contextInfo: { forwardingScore: 9999, isForwarded: true, mentionedJid: [sender]},quoted: mek, caption: teks
})
break 
//******************** 》Limit《 ********************\\
       case 'topbalance':
                      if(!isGroup)return reply(mess.only.group)
                      Resta.updatePresence(from, Presence.composing)
                      let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
                      let mebn = [];
                      for (let i of balance){
                      mebn.push(i.id)
                      let bl = (i.balance)
                      txot += `*ID :* @${i.id.split("@")[0]}\n➸ Balance : ${bl}\n\n`
                      }
                      mentions(txot, mebn, true)
                      break
            case 'limit':
            case 'ceklimit': 
            case 'balance': 
            case 'glimit':
                      reply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                      break
            case 'buylimit':{
                       if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
                       if (q.includes('-')) return reply(`Jangan menggunakan -`)
                       if (isNaN(q)) return reply(`Harus berupa angka`)
                       let ane = Number(nebal(q) * 100)
                       if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                       kurangBalance(sender, ane, balance)
                       giveLimit(sender, nebal(q), limit)
                       reply(monospace(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
                       }
                       break
    case 'buyglimit':{
                       if(!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
                       const koinPerlimit = 100
                       const total = koinPerlimit * q
                       if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
                       kurangBalance(sender, total, balance)
                       givegame(sender, q, glimit)
                       reply(monospace(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
                       }
                       break
          case 'giftlimit':
                       if(!isOwner)return
                       if (!q)return reply(`Example : ${prefix + command} @tag 10`)
                       lim = q.split(" ")[1]
                       const tag1 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
                       giveLimit(tag1, lim, limit)
                       reply('Succes')
                       break
              
/*****************************MENU DOWNLOAD******************************/
                  case 'mediafire': 
                            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                            if (args.length < 1) return reply('Link Nya Mana? ')
                            if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
                            reply(mess.wait)
                            teks = args.join(' ')
                            res = await mediafireDl(teks)
                            result = `Media Fire Downloader

${shp} *Nama :* ${res[0].nama}
${shp} *Ukuran :* ${res[0].size}
${shp} *Link :* ${res[0].link}

 _*Tunggu Proses Mengirim Media......*_`
                         reply(result)
                         sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
                         limitAdd(sender, limit)
                         break
               case 'ytsearch': case 'yts':
                       if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                       if(!q) return reply(`Example : ${prefix + command} Melukis senja`)
                       reply(mess.wait) 
                       try{
                       ysearch = await yts(q)
                       }catch(e){
                       return reply(mess.error)
                       }
                       p = 0
                       teks = `Y T  S E A R C H\nTotal : ${ysearch.all.length}\n\n`
                       for(let i of ysearch.all){
                       teks += `${p+=1}.\nTitle :` + i.title + '\n'
                       teks += `Url :` + i.url + '\n'
                       teks += `Durasi :` + i.timestamp + '\n\n-----------------------------\n\n'
                       }
                       teks +=  `Ketik ${prefix}getmusic 1 atau angka selanjutnya untuk mengambil Music!\nKetik ${prefix}getvideo 1 atau angka selanjutnya untuk mengambil Video!`
                       reply(teks)
                       limitAdd(sender, limit)
                       break
              case 'tiktoknowm':
                     if(!isPremium && !isOwner )return reply(mess.only.prem)
                     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(aml.Iv)
                     if (args.length < 1) return reply('Link?')
                     lin = args[0]
                     reply(mess.wait) 
                     hx.ttdownloader(`${args[0]}`)
            		.then(result => {
             		const { wm, nowm, audio } = result
             		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
            		.then(async (a) => {
             		me = `*Link* : ${a.data}`
	                 Resta.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek, caption:me}) 
                     })
                     }) 
                     break
        case 'tiktok':
                     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                     if (args.length < 1) return reply('Link?')
                     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(aml.Iv)
                     lin = args[0]
                     reply(mess.wait)
                     hx.ttdownloader(lin).then(res => {
                     console.log('[ T I K T O K ] downloader')
                     ep = res.wm
                     sendMediaURL(from, ep, 'Done!')
                     limitAdd(sender, limit)
                      })
                      break
            case 'getvideo':
                       try{
                       if (!m.quoted.sender === Resta.user.jid) return reply('Reply pesan hasil pencarian youtube!')
                       if(!q) return reply('Masukkan nomo urutnya!')
                       reply(mess.wait) 
                       quee = 'Y T  S E A R C H'
                       qteks = m.quoted.text
                       if(qteks.includes(quee)){
                       jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
                       if(isNaN(args[0])) return reply('Input harus berupa nomor!')
                       if(args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
                       pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2) 
                       downm = await ytv(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
                       const { dl_link, thumb, title, filesizeF, filesize } = downm
                       if(Number(filesize) >= 30000){
                       short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                       reply(`Ukuran file Terlalu besar!!\nSize : ${filesizeF}\nLink : ${short.data}\n\nSilahkan download Link diatas!!`)
                       }
                       teks = `*P L A Y  V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}`
                       sendMediaURL(from, dl_link, teks)
                        }
                        } catch(e) {
                        reply('Reply pesan Bot hasil pencarian youtube!')
                       console.log(e)
                       }
                       break
          case 'getmusic':
                       try{
                       if (!m.quoted.sender === Resta.user.jid) return reply('Reply pesan Bot hasil pencarian youtube!')
                       if(!q) return reply('Masukkan nomo urutnya!')
                       reply(mess.wait) 
                       quee = 'Y T  S E A R C H'
                       qteks = m.quoted.text
                       if(qteks.includes(quee)){
                       jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
                       if(isNaN(args[0])) return reply('Input harus berupa nomor!')
                       if(args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
                       pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2) 
                       downm = await yta(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
                       const { dl_link, thumb, title, filesizeF, filesize } = downm
                       if(Number(filesize) >= 30000){
                       short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                       reply(`Ukuran file Terlalu besar!!*\n*Size : ${filesizeF}*\n*Link : ${short.data}*\n\n_Silahkan download Link diatas!!_`)
                       }
                       teks = `*P L A Y M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n\nTunggu sebentar\nMusic segera dikirim`
                       sendMediaURL(from, dl_link)
                       }
                       } catch(e) {
                       reply('Reply pesan Bot hasil pencarian youtube!')
                       console.log(e)
                       }
                       break
             case 'play':
                     if(!isPremium) return reply (mess.only.prem) 
                      if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
                      reply(mess.wait) 
                      let yut = await yts(q)
                      yta(yut.videos[0].url)
                     .then(async(res) => {
                      const { thumb, title, filesizeF, filesize } = res
                      const capti = `P L A Y\n\n Title : ${title}\n\n Size : ${filesizeF}\n\n Views: ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n URL : ${yut.videos[0].url}`
                      ya = await getBuffer(thumb)
                      py =  await Resta.prepareMessage(from, ya, image)
                      sendButtonLoc(from,monospace(capti),'',`${fake}`,[{buttonId: `${prefix}playyt3 ${q}`, buttonText: {displayText: '</AUDIO'}, type: 1},
                      {buttonId: `${prefix}playmp4 ${q}`, buttonText: {displayText: '</VIDEO'}, type: 1}
                       ],null,null,ya)
                       })
                      break
        case 'playyt3': 
                      if(!isPremium) return reply (mess.only.prem) 
                      try {
                      reply(mess.wait) 
                      let yut = await yts(q)
                      yta(yut.videos[0].url)
                     .then((res) => {
                      const { dl_link, thumb, title, filesizeF, filesize } = res
                      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                     .then((a) => {
                      if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Ext : MP3\n${shp} Filesize : ${filesizeF}\n${shp} Upload : ${yut.videos[0].ago}\n${shp} Views : ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} Link : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                      const captionis = `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Size : ${filesizeF}\n${shp} Views: ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} URL : ${yut.videos[0].url}\n\n*_Permintaan Anda Sedang Di Prosess!_*`
                      sendMediaURL(from, dl_link, '')
                      })
                      })
                     .catch((err) => reply(`${err}`))
                     } catch (err) {
                     sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
                     console.log(color('[PlayMp3]', 'red'), err)
                     reply(mess.error.api)
                     }
                     break
           case 'playmp4':
                     if(!isPremium) return reply (mess.only.prem) 
                     try {
                     reply(mess.wait)
                     let yut = await yts(q)
                     ytv(yut.videos[0].url)
                    .then((res) => {
                     const { dl_link, thumb, title, filesizeF, filesize } = res
                     axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                    .then((a) => {
                     if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*P L A Y  M P 4*\n\n • Judul : ${title}\n • Size : ${filesizeF}\n • Upload : ${yut.videos[0].ago}\n • Ditonton : ${yut.videos[0].views}\n • Duration : ${yut.videos[0].timestamp}\n • Link : ${a.data}\n\n_Ukuran File Terlalu besar, anda bisa download sendiri lewat Link Diatas!!_`)
                     const mp4 = `
*PLAY VIDEO*\n\n Judul : ${title}\n\n Size : ${filesizeF}\n\n Upload : ${yut.videos[0].ago}\n\n Ditonton : ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n Url : ${yut.videos[0].url}`
                     sendMediaURL (from, dl_link, mp4)
                      })
                      })
                     .catch((err) => reply(`${err}`))
                      } catch (err) {
                     sendMess(ownerNumber, 'PlayMp4 Error : ' + err)
                     console.log(color('[PlayMp4]', 'red'), err)
                     reply(mess.error)
                     }
                     break
          case 'ytmp4':
                     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                     if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			         let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			         if (!isLinks2) return reply(mess.error.Iv)
                     reply(mess.wait)
				     try {
				     ytv(args[0])
				    .then((res) => {
				     const { dl_link, thumb, title, filesizeF, filesize } = res
				     axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				    .then((a) => {
				     if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YT MP4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
				     const captionsYtmp4 = `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Please wait, the media file is being sent it may take a few minutes_`
				     sendMediaURL(from, thumb, captionsYtmp4)
				     sendMediaURL(from, dl_link).catch(() => reply(mess.Iv)) 
				     limitAdd(sender, limit)
				     })		
				     })
				     } catch (err) {
			         reply(mess.error.Iv)
				     }
				    break
             case 'ytmp3':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
			        if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			        let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			        if (!isLinks) return reply(mess.error.Iv)
                    reply(mess.wait)
				    try {
				    yta(args[0])
				   .then((res) => {
				    const { dl_link, thumb, title, filesizeF, filesize } = res
				    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				   .then((a) => {
			        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
				    const captions = `*YT MP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Please wait, the media file is being sent it may take a few minutes_`
			        sendMediaURL(from, thumb, captions)
				    sendMediaURL(from, dl_link).catch(() =>  reply(mess.error)) 
				    limitAdd(sender, limit)
				    })
				    })
				    } catch (err) {
			        reply(mess.error.Iv)
				    }
				    break
				case 'ig': 
				case 'instagram':
				case 'igdl':
	              if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
	              if (args.length < 1) return reply(`Kirim perintah *${prefix}tiktkk link*`) 
                  if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(aml.Iv)
                  reply(mess.wait) 
                  hx.igdl(args[0])
                 .then(async(result)=> {
                  for(let i of result){
                  if(i.url.includes('mp4')){
                  let link = await getBuffer(i.url)
                  Resta.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}\n${fake}`})
                  limitAdd(sender, limit)
                  } else {
                  let link = await getBuffer(i.url)
                  Resta.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}\n${fake}`})
                   limitAdd(sender, limit)
                   }
                   }
                   });
                 break
	   case 'igstory': 
	              if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                  if(!q) return reply('*Username?*')
                  reply(mess.wait) 
                  hx.igstory(q)
                 .then(async(res)=> {
                  for(let i of res){
                  if(i.url.includes('mp4')){
                  let link = await getBuffer(i.url)
                  Resta.sendMessage(from,link,video,{quoted: mek,caption: `${fake}`}) 
                  limitAdd(sender, limit)
                  } else {
                  let link = await getBuffer(i.url)
                  Resta.sendMessage(from,link,image,{quoted: mek,caption: `${fake}`}) 
                  limitAdd(sender, limit)     
                  }
                  }
                  });
                 break
/*****************************MENU MAKER******************************/
       case 'naruto':
                  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                  if (!q) return reply('teksnya mana?')
                  pNaruto(`${q}`)
                 .then(res => {
              	console.log(res) 
                  sendMediaURL(from, res.url, fake) 
                  limitAdd(sender, limit)
		           })
		           break
         case 'shadow':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                   if (!q) return reply('teksnya mana?')
                   pShadow(`${q}`)
                  .then(res => {
               	console.log(res) 
                   sendMediaURL(from, res.url, fake) 
                   limitAdd(sender, limit)
	               })
		           break
         case 'romantic':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (!q) return reply('teksnya mana?')
                    pRomantic(`${q}`)
                   .then(res => {
                	console.log(res) 
                    sendMediaURL(from, res.url, fake) 
                    limitAdd(sender, limit)
		             })
		            break
         case 'smoke':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (!q) return reply('teksnya mana?')
                    pSmoke(`${q}`)
                   .then(res => {
                	console.log(res) 
                    sendMediaURL(from, res.url, fake) 
                    limitAdd(sender, limit)
		            })
		            break
          case 'burnpaper':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (!q) return reply('teksnya mana?')
                    pBurnPapper(`${q}`)
                   .then(res => {
                	console.log(res) 
                    sendMediaURL(from, res.url, fake) 
                    limitAdd(sender, limit)
		             })
		            break
          case 'lovemsg':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (!q) return reply('teksnya mana?')
                    pLoveMsg(`${q}`)
                   .then(res => {
                	console.log(res) 
                    sendMediaURL(from, res.url, fake) 
                    limitAdd(sender, limit)
		            })
		            break
          case 'grass':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (!q) return reply('teksnya mana?')
                    pMsgGrass(`${q}`)
                   .then(res => {
                	console.log(res) 
                    sendMediaURL(from, res.url, fake) 
                    limitAdd(sender, limit)
		             })
		            break
          case 'doubleheart':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    if (!q) return reply('teksnya mana?')
                    pDoubleHeart(`${q}`)
                   .then(res => {
                	console.log(res) 
                    sendMediaURL(from, res.url, fake) 
                    limitAdd(sender, limit)
		             })
		             break
           case 'coffecup':
                      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                      if (!q) return reply('teksnya mana?')
                      pCoffeCup(`${q}`)
                     .then(res => {
                  	console.log(res) 
                      sendMediaURL(from, res.url, fake) 
                      limitAdd(sender, limit)
		               })
		              break
             case 'lovetext':
                       if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                       if (!q) return reply('teksnya mana?')
                       pLoveText(`${q}`)
                      .then(res => {
                       console.log(res) 
                       sendMediaURL(from, res.url, fake) 
                       limitAdd(sender, limit)
		                })
		               break
            case 'butterfly':
                         if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                         if (!q) return reply('teksnya mana?')
                         pButterfly(`${q}`)
                        .then(res => {
                     	console.log(res) 
                         sendMediaURL(from, res.url, fake) 
                         limitAdd(sender, limit)
		                  })
		                break
/*****************************MENU STALK******************************/
/*****************************MENU SEARCH******************************/
                
//------------------< Math Random >-------------------
		 case 'ganteng':
					if (!isGroup)return reply(mess.only.group)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let tejs = `Cowok paling ganteng di group ini adalah\n*@${aku.jid.split('@')[0]}*`
					mentions(tejs, [aku.jid, cintax.jid], true)
					break
		 case 'cantik':
					if (!isGroup)return reply(mess.only.group)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let gejs = `Cewek️ paling cantik di group ini adalah\n*@${cintax.jid.split('@')[0]}*`
					mentions(gejs, [aku.jid, cintax.jid], true)
					break
	      case 'jadian':
					if (!isGroup)return reply(mess.only.group)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let vejs = `Ciee.. yang lagi jadian\n*@${aku.jid.split('@')[0]}* ♥️ @${cintax.jid.split('@')[0]}\nSemoga Langgeng Hii`
					mentions(vejs, [aku.jid, cintax.jid], true)
					break
		 case 'bisakah':
				    if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} aku jadi ganteng`)
					const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					Resta.sendMessage(from, 'Pertanyaan : bisakah ' + q + '\n\nJawaban : ' + keh, text, { quoted: mek })
					break
		 case 'kapankah':
					if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} aku jadi wibu`)
					const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					Resta.sendMessage(from, 'Pertanyaan : kapankah ' + q + '\n\nJawaban : ' + koh, text, { quoted: mek })
					break
		 case 'apakah':
				    if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					Resta.sendMessage(from, 'Pertanyaan : apakah ' + q + '\n\nJawaban : ' + kah, text, { quoted: mek })
					break
		 case 'rate':
				    if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} kegantengan saya`)
					const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					Resta.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + te + '%', text, { quoted: mek })
					break
		 case 'hobby':
				    if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Rara`)
					const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					Resta.sendMessage(from, 'Pertanyaan : hobby ' + q + '\n\nJawaban : ' + by, text, { quoted: mek })
					break
		 case 'truth':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					reply(`${ttrth}`) 
					break
			case 'dare':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					reply(`${der}`) 
					break
	     case 'cekbapak': // By Ramlan ID
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					Resta.sendMessage(from, cek, text, { quoted: mek })
					break
        case 'delete':
	    case 'del':
	    case 'd':
				    if (!isGroup)return reply(mess.only.group)
				    if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                    if (!isQuotedMsg) return reply(`Reply pesan dari bot`)
                    if (!m.quoted.sender === Resta.user.jid) return reply(`Reply pesan dari bot`)
				    Resta.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				    break
/******************"************************SETTING GRUP*********/
                 case 'join':
                 case 'join':
                          if (!isOwner)return mentions(`Perintah ini Khusus owner`) 
                          if (args.length < 1) return reply(`Kirim perintah *${prefix}join* link grup`)
                          if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
                          let code = args[0].replace('https://chat.whatsapp.com/', '')
                          Resta.acceptInvite(code)
                         .then((res) => {
                          Resta.sendMessage(res.gid,`*Halo saya ${nama}!*\n_Saya di invit oleh @${sender.split("@")[0]} Untuk masuk ke dalam Group!_\n_Ketik ${prefix}menu untuk Melihat Fitur Bot!_\nJangan lupa Donasi`,text,{contextInfo:{mentionedJid:[sender]},quoted : mek})
                          reply(`_Succses Join Group!_`)
                           })
                         .catch((err) => reply(jsonformat(err)))
                          break
            case 'infoall':
                       if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
                       if(!q) return reply('Ingfonya apa?')
                       if (!isGroup) return reply(mess.only.group)
                       var nom = mek.participant
                       members_id = []
	                   teks = '\n'
	                   for (let mem of groupMembers) {
	                   teks += `┃${shp}  *@${mem.jid.split('@')[0]}*\n`
	                   members_id.push(mem.jid)
	                    }
                      mentions(`┏━━⬣ 𝙄𝙉𝙁𝙊 \n┃\n┃ *From : @${sender.split("@")[0]}*\n┃ *Info :  ${q}*\n┃ *Total Member : ${groupMembers.length}*\n┃ *Nama Group : ${groupName}*\n┃\n┗⬣\n\n┏━━⬣ 𝙏𝘼𝙂 𝘼𝙇𝙇\n┃`+teks+'┃\n┗⬣', members_id, false)
                      break
           case 'tagall':
                       if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)  
                       if (!isGroup) return reply(mess.only.group)
                       var nom = mek.participant
                       members_id = []
	                   teks = '\n'
	                   for (let mem of groupMembers) {
	                   teks += `┃${shp}  *@${mem.jid.split('@')[0]}*\n`
	                   members_id.push(mem.jid)
	                    }
                      mentions(`┏━━⬣ 𝙄𝙉𝙁𝙊 \n┃\n┃ *From : @${sender.split("@")[0]}*\n┃ *Total Member : ${groupMembers.length}*\n┃ *Nama Group : ${groupName}*\n┃\n┗⬣\n\n┏━━⬣ 𝙏𝘼𝙂 𝘼𝙇𝙇\n┃`+teks+'┃\n┗⬣', members_id, false)
                      break
           case 'linkgroup': case 'linkgc':
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     linkgc = await Resta.groupInviteCode(from)
                     reply('https://chat.whatsapp.com/'+linkgc)
                     break 
          case 'resetlink': case 'revokelink': case 'revoke':
                      if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
                      if (!isBotGroupAdmins) return reply (mess.only.Badmin)
                      Resta.query({ json: ['action', 'inviteReset', from], expect200: true })
                      reply('Succses Revoke!!') 
                      break
            case 'welcome':
                       if (!isGroup)return reply(mess.only.group)
                       if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                       if ((args[0]) === 'enable') {
                       if (isWelcome) return reply(`Udah aktif`)
                       welcome.push(from)
					   fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
					   reply('Welcome aktif')
                       } else if ((args[0]) === 'disable') {
                       let anu = welcome.indexOf(from)
                       welcome.splice(anu, 1)
                       fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
                       reply('Welcome nonaktif')
                       } else {
                       gc  = [
                       {buttonId: `${prefix + command} enable`, buttonText: {displayText: '</ON'}, type: 1},
                       {buttonId: `${prefix + command} disable`, buttonText: {displayText: '</OFF'}, type: 1}
                        ]
                        gc1 = {
                        contentText: `*Hello Admin👋, Please choose one below!*`,
                        footerText: `${fake}`,
                        buttons: gc,
                        headerType: 1
                        }
                        return Resta.sendMessage(from, gc1, MessageType.buttonsMessage,{quoted:mek})
                        }
                        break
                 case 'antilinkgrup':
                 case 'antilink':
                       if (!isGroup)return reply(mess.only.group)
                       if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
                       if ((args[0]) === 'enable') {
                       if (isAntilink) return reply(`Udah aktif`)
                       antilink.push(from)
					   fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					   reply('_Sukses mengaktifkan Antilink Whatsapp digroup ini_')
                       } else if ((args[0]) === 'disable') {
                       let anu = antilink.indexOf(from)
                       antilink.splice(anu, 1)
                       fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                       reply('_Sukses menonaktifkan Antilink Whatsapp digroup ini_')
                       } else {
                       gc  = [
                       {buttonId: `${prefix + command} enable`, buttonText: {displayText: '</ON'}, type: 1},
                       {buttonId: `${prefix + command} disable`, buttonText: {displayText: '</OFF'}, type: 1}
                        ]
                        gc1 = {
                        contentText: `*Hello Admin👋, Please choose one below!*`,
                        footerText: `${fake}`,
                        buttons: gc,
                        headerType: 1
                        }
                        return Resta.sendMessage(from, gc1, MessageType.buttonsMessage,{quoted:mek})
                        }
                        break
/*********************EMOJI*************/
                case 'sticker':
			    case 'stiker':
			    case 's':
			    case 'stickergif':
			    case 'gifsticker':
						 if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						const media = await Resta.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						await ffmpeg(`${media}`)
					   .input(media)
					   .on('start', function (cmd) {
					    console.log(`Started : ${cmd}`)
						})
					   .on('error', function (err) {
						console.log(`Error : ${err}`)
						fs.unlinkSync(media)
						reply(mess.error)
						})
					   .on('end', function () {
					   console.log('Finish')
					   exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					   if (error) return reply(mess.error.api)
					   Resta.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
					   fs.unlinkSync(media)	
					   fs.unlinkSync(`./sticker/${sender}.webp`)	
						})
						})
					  .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					  .toFormat('webp')
					  .save(`./sticker/${sender}.webp`)
					    } else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					   const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					   const media = await Resta.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					   reply(mess.wait)
					   await ffmpeg(`${media}`)
					  .inputFormat(media.split('.')[4])
					  .on('start', function (cmd) {
					   console.log(`Started : ${cmd}`)
						}) 
					  .on('error', function (err) {
					   console.log(`Error : ${err}`)
					   fs.unlinkSync(media)
					   tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					   reply(mess.error.Iv)
					   })
					 .on('end', function () {
					  console.log('Finish')
					  exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					  if (error) return reply(mess.error.api)
					  Resta.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
					  fs.unlinkSync(media)
					  fs.unlinkSync(`./sticker/${sender}.webp`)
					  })
					  })
					 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					 .toFormat('webp')
					 .save(`./sticker/${sender}.webp`)
					   } else {
					  reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
					  }
					  break
          case 'emoji':
                      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                      if (args.length == 0) return reply(`Example: ${prefix + command} wa 🗿

*LIST EMOJI*

ap = Emoji Apple
wa = Emoji Whatsapp
fb = Emoji Facebook
go = Emoji Google
mo = Emoji Mozilla
tw = Emoji Twitter
sa = Emoji Samsung

penggunaan : ${prefix + command } wa 🗿`)
                     emojis = args[0]
                     args.shift()
                     emoje = args.join(" ")
                     reply(mess.wait)
                     limitAdd(sender, limit)
                     switch (emojis) {
               case 'ap':
               case 'apple':
			             emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[0].url}`
    	         		sendStickerFromUrl(from,`${teks}`)	
             			console.log(teks)
   	  	     		})
                        break
              case 'wa':
              case 'whatsapp':
                         emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[4].url}`
      	       		sendStickerFromUrl(from,`${teks}`)	
    		         	console.log(teks)
   		     	 	})
                         break
              case 'fb':
              case 'facebook':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[6].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
              case 'go':
              case 'google':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[1].url}`
    	   	  	sendStickerFromUrl(from,`${teks}`)	
    	   	  	console.log(teks)
   			  	})
                     break
           case 'mo':
           case 'mozila':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[14].url}`
    			     sendStickerFromUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break
            case 'tw':
                  emoji.get(`${emoje}`).then(emoji => {
				  teks = `${emoji.images[5].url}`
    	  		sendStickerFromUrl(from,`${teks}`)	
      			console.log(teks)
   				})
                  break
            case 'sa':
            case 'samsung':
                    emoji.get(`${emoje}`).then(emoji => {
				    teks = `${emoji.images[2].url}`
       	 		sendStickerFromUrl(from,`${teks}`)	
        			console.log(teks)
   	 			})
                   break
                   }
                   break
        case 'tebakgambar':{
                  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                  if (!isGroup) return reply(mess.only.group)
                  if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
                  let tbg = await axios.get(`https://api.zeks.xyz/api/tebakgambar?apikey=Hadir_hmm`)
                  const petunjuk = tbg.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                  sendMediaURL(from, tbg.data.result.soal, monospace(`Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`), mek)
                  let anih = tbg.data.result.jawaban.toLowerCase()
                  game.addgambar(from, anih, gamewaktu, tebakgambar)
                  gameAdd(sender, glimit)
	               }
                   break  	 
        case 'tebakkata': case 'tk':{
                   if (!isGroup) return reply(mess.only.group)
                   if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (game.isTebakKata(from, tebakkata)) return reply(`Masih ada soal yang belum di selesaikan`)
                   let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lolkey}`)
                   reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.pertanyaan}\n\nWaktu : ${gamewaktu}s`)
                   let ahhh = anu.data.result.jawaban.toLowerCase()
                   game.addkata(from, ahhh, gamewaktu, tebakkata)
                   gameAdd(sender, glimit)
                    }
                   break
        case 'tebakkimia': case 'tuk':{
                    if (!isGroup) return reply(mess.only.group)
                    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    if (game.isTebakKimia(from, tebakkimia)) return reply(`Masih ada soal yang belum di selesaikan`)
                    let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${lolkey}`)
                    reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* Lambang unsur ${anu.data.result.nama} adalah?\n\nWaktu : ${gamewaktu}s`)
                    let revasayank = anu.data.result.lambang.toLowerCase()
                    game.addkimia(from, revasayank, gamewaktu, tebakkimia)
                    gameAdd(sender, glimit)
                      }
                    break
         case 'tebakbendera': case 'tb':{
                    if (!isGroup) return reply(mess.only.group)
                    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    if (game.isTebakBendera(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
                    let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${lolkey}`)
                    const petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* Bendera negara manakah itu ${anu.data.result.flag}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
                    let ikasayank = anu.data.result.name.toLowerCase()
                    game.addbendera(from, ikasayank, gamewaktu, tebakbendera)
                    gameAdd(sender, glimit)
                     }
                    break
         case 'tebakanime': case 'ta':{
                    if (!isGroup) return reply(mess.only.group)
                    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    if (game.isTebakAnime(from, tebakanime)) return reply(`Masih ada soal yang belum di selesaikan`)
                    let anu = await axios.get(`https://api.lolhuman.xyz/api/tebakchara?apikey=${lolkey}`)
                    const petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    sendMediaURL(from, anu.data.result.image, monospace(`Silahkan tebak karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`), mek)
                    let nurulsayank = anu.data.result.name.toLowerCase()
                    game.addanime(from, nurulsayank, gamewaktu, tebakanime)
                    gameAdd(sender, glimit)
                    }
                    break
         case 'siapaaku': case 'siapakahaku': case 'sa':{
                     if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                     if (!isGroup) return reply(mess.only.group)
                     if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
                     let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolkey}`)
                     reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nWaktu : ${gamewaktu}s`)
                     let anau = anu.data.result.answer.toLowerCase()
                     game.addsyiko(from, anau, gamewaktu, siapaaku)
                     gameAdd(sender, glimit)
                      }
                     break
           case 'tebaklirik': case 'tl':{
                      if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                      if (!isGroup) return reply(mess.only.group)
                      if (game.isTebakLirik(from, tebaklirik)) return reply(`Masih ada soal yang belum di selesaikan`)
                      let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${lolkey}`)
                      const petunjuk = anu.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                      reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
                      let anal = anu.data.result.answer.toLowerCase()
                      game.addtebaklirik(from, anal, gamewaktu, tebaklirik)
                      gameAdd(sender, glimit)
                        }
                      break
           case 'math':{
                       if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                       if (!isGroup) return reply(mess.only.group)
                       if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
                       if (!q) return reply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
                       let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=${q}&apikey=GSdohIiH`)
                       reply(`*Soal :*\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} :_\nWaktu : ${gamewaktu}`)
                       let anih = anu.data.jawaban.toLowerCase()
                       game.addmtk(from, anih, gamewaktu, mtk)
                       gameAdd(sender, glimit)
                       }
                       break
          case 'family100':{
                      if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                      if (!isGroup) return reply(mess.only.group)
                      if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
                      let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolkey}`)
                      reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
                      let anoh = anu.data.result.aswer
                      let rgfds = []
                      for (let i of anoh){
                      let fefs = i.split('/') ? i.split('/')[0] : i
                      let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
                      let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
                      rgfds.push(axsf.toLowerCase())
                        }
                       game.addfam(from, rgfds, gamewaktu, family100)
                       gameAdd(sender, glimit)
                         }
                         break
         default:
          }  
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
   }) 
}
starts()
