exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `tunggu sebentar π`
}

exports.ok = () => {
    return `Done π`
}

exports.err = () => {
    return `Fitur lagi Error`
}
exports.erorLink = () => {
    return `Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah β Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `οΈSudah selesai`
}

exports.groupOnly = () => {
    return `π₯  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `π  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*ββ γ HALL OF SHAME γ ββ*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `User bukan seorang admin!`
}

exports.adminAlready = () => {
    return `Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! π`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = () =>{
	return`Hai saya tryppycart 2.0.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*βTime Server : ${time}*
*π List-Menu Tryppycart 2.0 :*

γ Bot Info γ 
π${prefix}owner
π${prefix}rules
π${prefix}sc
π${prefix}ping
π${prefix}runtime
π${prefix}botstatus
π${prefix}donate


γ Owner γ 
π< evaluate
π> evaluate
π$ exec
π=> exec
π${prefix}setmenu [query]
π${prefix}setmenu templateLocation
π${prefix}setmenu templateTenor
π${prefix}sendsesi
π${prefix}listpc
π${prefix}listgc
π${prefix}broadcast [text]
π${prefix}bc [text]
π${prefix}bcgc [text]
π${prefix}nsfw [on/off]
π${prefix}autorespond [on/off]
π${prefix}antiviewonce [on/off]
π${prefix}join [link]
π${prefix}self
π${prefix}public [only bot]
π${prefix}del [reply pesan bot]
π${prefix}setppbot [reply image]


γ Database γ 
π${prefix}setcmd [reply stiker]
π${prefix}delcmd [reply stiker]
π${prefix}listcmd
π${prefix}absen
π${prefix}cekabsen
π${prefix}deleteabsen
π${prefix}absenstart
π${prefix}addmsg [nama file]
π${prefix}getmsg [nama file]
π${prefix}listmsg
π${prefix}delmsg [nama file]


γ Group γ 
π${prefix}listonline
π${prefix}sider
π${prefix}infochat
π${prefix}setdesk [text]
π${prefix}setppgrup [reply image]
π${prefix}antilink [on/off]
π${prefix}revoke
π${prefix}leave
π${prefix}add [62***]
π${prefix}kick @tag
π${prefix}leave
π${prefix}linkgc
π${prefix}group [open/close]
π${prefix}tagall [text]
π${prefix}hidetag [text]

γ Anime γ 
π${prefix}quotesanime
π${prefix}anime [query]
π${prefix}manga [query]
π${prefix}character [query]

γ Tag γ 
π${prefix}stickertag
π${prefix}videotag [query]
π${prefix}vntag [query]
π${prefix}imagetag [query]

γ Stalking γ 
π${prefix}igstalk [username]
π${prefix}ghstalk [username]
π${prefix}ytstalk [channel]


γ Search γ 
π${prefix}ytsearch [query]
π${prefix}wallpaper [query]
π${prefix}wikimedia [query]
π${prefix}wattpad [query]
π${prefix}webtoons [query]
π${prefix}drakor [query]
π${prefix}pinterest [query]


γ Converter γ 
π${prefix}stiker [reply image]
π${prefix}tourl [image/video]
π${prefix}togif [sticker]
π${prefix}tomp4 [sticker]
β°β${prefix}toimg [reply sticker]


γ Image Effect γ 
π${prefix}wanted [reply image/stiker]
π${prefix}utatoo [reply image/stiker]
π${prefix}unsharpen [reply image/stiker]
π${prefix}thanos [reply image/stiker]
π${prefix}sniper [reply image/stiker]
π${prefix}sharpen [reply image/stiker]
π${prefix}sepia [reply image/stiker]
π${prefix}scary [reply image/stiker]
π${prefix}rip [reply image/stiker]
π${prefix}redple [reply image/stiker]
π${prefix}rejected [reply image/stiker]
π${prefix}posterize [reply image/stiker]
π${prefix}ps4 [reply image/stiker]
π${prefix}pixelize [reply image/stiker]
π${prefix}missionpassed [reply image/stiker]
π${prefix}moustache [reply image/stiker]
π${prefix}lookwhatkarenhave [reply image/stiker]
π${prefix}jail [reply image/stiker]
π${prefix}invert [reply image/stiker]
π${prefix}instagram [reply image/stiker]
π${prefix}greyscale [reply image/stiker]
π${prefix}glitch [reply image/stiker]
π${prefix}gay [reply image/stiker]
π${prefix}frame [reply image/stiker]
π${prefix}fire [reply image/stiker]
π${prefix}distort [reply image/stiker]
π${prefix}dictator [reply image/stiker]
π${prefix}deepfry [reply image/stiker]
π${prefix}ddungeon [reply image/stiker]
π${prefix}circle [reply image/stiker]
π${prefix}challenger [reply image/stiker]
π${prefix}burn [reply image/stiker]
π${prefix}brazzers [reply image/stiker]
π${prefix}beautiful [reply image/stiker]


γ Sticker Effect γ 
π${prefix}jail [reply image/stiker]
π${prefix}red [reply image/stiker]
π${prefix}gay [reply image/stiker]
π${prefix}bloo [reply image/stiker]
π${prefix}blue [reply image/stiker]
π${prefix}sepia [reply image/stiker]
π${prefix}green [reply image/stiker]
π${prefix}glass [reply image/stiker]
π${prefix}invert [reply image/stiker]
π${prefix}blurple [reply image/stiker]
π${prefix}blurple2 [reply image/stiker]
π${prefix}wasted [reply image/stiker]
π${prefix}passed [reply image/stiker]
π${prefix}triggered [reply image/stiker]
π${prefix}comrade [reply image/stiker]
π${prefix}greyscale [reply image/stiker]
π${prefix}threshold [reply image/stiker]
π${prefix}brightness [reply image/stiker]
π${prefix}invertgreyscale [reply image/stiker]


γ Download γ 
π${prefix}tiktok [link]
π${prefix}tiktoknowm [link]
π${prefix}tiktokwm [link]
π${prefix}tiktokaudio [link]
π${prefix}ytdl [link]
π${prefix}play [query]
π${prefix}ytmp3 [link]
π${prefix}ytshortmp3 [link]
π${prefix}ytmp4 [link]
π${prefix}ytshorts [link]
π${prefix}facebook [link]
π${prefix}facebooksd [link]
π${prefix}facebookhd [link]
π${prefix}fbaudio [link]
π${prefix}igstory [username]
π${prefix}igdl [link]
π${prefix}igphoto [link]
π${prefix}igvideo [link]
π${prefix}igreels [link]
π${prefix}igtv [link]
π${prefix}soundcloud [link]
π${prefix}gitclone [link repo]
π${prefix}gitrepo [username repo branch]
π${prefix}mediafire [link]
π${prefix}twitter link


γ Random Anime γ
π${prefix}loli
π${prefix}neko
π${prefix}waifu
π${prefix}shinobu
π${prefix}megumin
π${prefix}bully
π${prefix}cuddle
π${prefix}cry
π${prefix}hug
π${prefix}awoo
π${prefix}kiss
π${prefix}lick
π${prefix}pat
π${prefix}smug
π${prefix}bonk
π${prefix}yeet
π${prefix}blush
π${prefix}smile
π${prefix}wave
π${prefix}highfive
π${prefix}handhold
π${prefix}nom
π${prefix}bite
π${prefix}glomp
π${prefix}slap
π${prefix}kill
π${prefix}happy
π${prefix}wink
π${prefix}poke
π${prefix}dance
π${prefix}cringe

γ Others γ
π${prefix}afk [reason]
π${prefix}translate kode_bahasa text
π${prefix}kalkulator [query]
π${prefix}smeme [text]
π${prefix}smeme2 [text|text]
π${prefix}memegen [text|text]
β°β

γ Game Menu γ
π${prefix}kuismath
π${prefix}tebak [option]
π${prefix}tekateki
π${prefix}susunkata
π${prefix}caklontong

γ TqTo γ 
πMy God
πMy Parents
πFatih A.
πHandraMz
πDikaArdnt
πAnd All Support
    `
}

exports.rules = (prefix) => {
    return `
*ββ γ RULES AND FAQ γ ββ*

1. Jangan spam bot. π
Sanksi: *β WARN/SOFT BLOCK*

2. Jangan telepon bot. βοΈ
Sanksi: *β SOFT BLOCK*

3. Jangan mengeksploitasi bot.π
Sanksi: *PERMANENT BLOCK*

π―οΈ Bot tidak atau lambat merespon ?
β‘οΈ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rulesβΌοΈ

π―οΈ Dimana saya bisa mendapatkan Script dari bot ini ?
β‘οΈ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

π―οΈ Boleh saya menambah ke grup?
β‘οΈ Untuk sementara bot dalam status free to add.

π―οΈ Prefixnya apa ya?
β‘οΈ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

π―οΈ Kak, kok syaa chat owner tidak direspon?
β‘οΈ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

β οΈ Segala kebijakan dan ketentuan Tryppycart 2.0 di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*οΉ*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Alphabot
ππ
`
}
exports.welcome = () =>{
	return`π©πΊπππΊπ ππππΊ πππππ ππΊπ π€
	
ππ­πΊππΊ :
ππ΄πππ :
ππ¦πΎππ½πΎπ :
ππ ππππ :
ππ―πΊππππ ππππΎπ ππππ ππΊ ππΊk ~`
}
exports.leave = () =>{
	return`Yah kok out π£ Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------γ SOURCE CODE γ ------*

Base : https://github.com/Whojoestar
`
}
exports.tos = (ownernomer) => {
    return `
*-------γ GITHUB γ -------*

Hai kak βΊοΈ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara follow github saya
github : https://github.com/whojoestar/

Thanks!

    `
}

exports.info = (prefix) =>{
	return`γ Bot Info γ 
π${prefix}owner
π${prefix}rules
π${prefix}sc
π${prefix}ping
π${prefix}runtime
π${prefix}botstatus
π${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`γ Owner γ 
π< evaluate
π> evaluate
π$ exec
π=> exec
π${prefix}setmenu [query]
π${prefix}setmenu templateLocation
π${prefix}setmenu templateTenor
π${prefix}sendsesi
π${prefix}listpc
π${prefix}listgc
π${prefix}broadcast [text]
π${prefix}bc [text]
π${prefix}bcgc [text]
π${prefix}nsfw [on/off]
π${prefix}autorespond [on/off]
π${prefix}antiviewonce [on/off]
π${prefix}join [link]
π${prefix}self
π${prefix}public [only bot]
π${prefix}del [pesan bot]
π${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`γ Database γ 
π${prefix}setcmd [reply stiker]
π${prefix}delcmd [reply stiker]
π${prefix}listcmd
π${prefix}absen
π${prefix}cekabsen
π${prefix}deleteabsen
π${prefix}absenstart
π${prefix}addmsg [nama file]
π${prefix}getmsg [nama file]
π${prefix}listmsg
π${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`γ Group γ 
π${prefix}listonline
π${prefix}sider
π${prefix}infochat
π${prefix}setdesk [text]
π${prefix}setppgrup [reply image]
π${prefix}antilink [on/off]
π${prefix}revoke
π${prefix}leave
π${prefix}add [62***]
π${prefix}kick @tag
π${prefix}leave
π${prefix}linkgc
π${prefix}group [open/close]
π${prefix}tagall [text]
π${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`γ Anime γ 
π${prefix}quotesanime
π${prefix}anime [query]
π${prefix}manga [query]
π${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`γ Tag γ 
π${prefix}stickertag
π${prefix}videotag [query]
π${prefix}vntag [query]
π${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`γ Stalking γ 
π${prefix}igstalk [username]
π${prefix}ghstalk [username]
π${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`γ Search γ 
π${prefix}ytsearch [query]
π${prefix}wallpaper [query]
π${prefix}wikimedia [query]
π${prefix}hentai
π${prefix}wattpad [query]
π${prefix}webtoons [query]
π${prefix}drakor [query]
π${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`γ Converter γ 
π${prefix}stiker [reply image]
π${prefix}tourl [image/video]
π${prefix}togif [sticker]
π${prefix}tomp4 [sticker]
β°β${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`γ Image Effect γ 
π${prefix}wanted [reply image/stiker]
π${prefix}utatoo [reply image/stiker]
π${prefix}unsharpen [reply image/stiker]
π${prefix}thanos [reply image/stiker]
π${prefix}sniper [reply image/stiker]
π${prefix}sharpen [reply image/stiker]
π${prefix}sepia [reply image/stiker]
π${prefix}scary [reply image/stiker]
π${prefix}rip [reply image/stiker]
π${prefix}redple [reply image/stiker]
π${prefix}rejected [reply image/stiker]
π${prefix}posterize [reply image/stiker]
π${prefix}ps4 [reply image/stiker]
π${prefix}pixelize [reply image/stiker]
π${prefix}missionpassed [reply image/stiker]
π${prefix}moustache [reply image/stiker]
π${prefix}lookwhatkarenhave [reply image/stiker]
π${prefix}jail [reply image/stiker]
π${prefix}invert [reply image/stiker]
π${prefix}instagram [reply image/stiker]
π${prefix}greyscale [reply image/stiker]
π${prefix}glitch [reply image/stiker]
π${prefix}gay [reply image/stiker]
π${prefix}frame [reply image/stiker]
π${prefix}fire [reply image/stiker]
π${prefix}distort [reply image/stiker]
π${prefix}dictator [reply image/stiker]
π${prefix}deepfry [reply image/stiker]
π${prefix}ddungeon [reply image/stiker]
π${prefix}circle [reply image/stiker]
π${prefix}challenger [reply image/stiker]
π${prefix}burn [reply image/stiker]
π${prefix}brazzers [reply image/stiker]
π${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`γ Sticker Effect γ 
π${prefix}jail [reply image/stiker]
π${prefix}red [reply image/stiker]
π${prefix}gay [reply image/stiker]
π${prefix}bloo [reply image/stiker]
π${prefix}blue [reply image/stiker]
π${prefix}sepia [reply image/stiker]
π${prefix}green [reply image/stiker]
π${prefix}glass [reply image/stiker]
π${prefix}invert [reply image/stiker]
π${prefix}blurple [reply image/stiker]
π${prefix}blurple2 [reply image/stiker]
π${prefix}wasted [reply image/stiker]
π${prefix}passed [reply image/stiker]
π${prefix}triggered [reply image/stiker]
π${prefix}comrade [reply image/stiker]
π${prefix}greyscale [reply image/stiker]
π${prefix}threshold [reply image/stiker]
π${prefix}brightness [reply image/stiker]
π${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`γ Download γ 
π${prefix}tiktok [link]
π${prefix}tiktoknowm [link]
π${prefix}tiktokwm [link]
π${prefix}tiktokaudio [link]
π${prefix}ytdl [link]
π${prefix}play [query]
π${prefix}ytmp3 [link]
π${prefix}ytshortmp3 [link]
π${prefix}ytmp4 [link]
π${prefix}ytshorts [link]
π${prefix}facebook [link]
π${prefix}facebooksd [link]
π${prefix}facebookhd [link]
π${prefix}fbaudio [link]
π${prefix}igstory [username]
π${prefix}igdl [link]
π${prefix}igphoto [link]
π${prefix}igvideo [link]
π${prefix}igreels [link]
π${prefix}igtv [link]
π${prefix}soundcloud [link]
π${prefix}gitclone [link repo]
π${prefix}gitrepo [username repo branch]
π${prefix}mediafire [link]
π${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`γ Random Anime γ
π${prefix}loli
π${prefix}neko
π${prefix}waifu
π${prefix}shinobu
π${prefix}megumin
π${prefix}bully
π${prefix}cuddle
π${prefix}cry
π${prefix}hug
π${prefix}awoo
π${prefix}kiss
π${prefix}lick
π${prefix}pat
π${prefix}smug
π${prefix}bonk
π${prefix}yeet
π${prefix}blush
π${prefix}smile
π${prefix}wave
π${prefix}highfive
π${prefix}handhold
π${prefix}nom
π${prefix}bite
π${prefix}glomp
π${prefix}slap
π${prefix}kill
π${prefix}happy
π${prefix}wink
π${prefix}poke
π${prefix}dance
π${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`γ Nsfw & Sfw γ
π${prefix}ahegao
π${prefix}ass
π${prefix}bdsm
π${prefix}blowjob
π${prefix}cuckold
π${prefix}cum
π${prefix}ero
π${prefix}femdom
π${prefix}foot
π${prefix}gangbang
π${prefix}glasses
π${prefix}jahy
π${prefix}manga
π${prefix}masturbation
π${prefix}neko
π${prefix}orgy
π${prefix}panties
π${prefix}pussy
π${prefix}tentacles
π${prefix}thighs
π${prefix}yuri
π${prefix}feet
π${prefix}lewdkemo
π${prefix}woof
π${prefix}gasm
π${prefix}solo
π${prefix}8ball
π${prefix}goose
π${prefix}avatar
π${prefix}hololewd
π${prefix}gecg
π${prefix}holo
π${prefix}fox_girl
π${prefix}tits
π${prefix}eroyuri
π${prefix}holoyero
π${prefix}lizard
π${prefix}keta
π${prefix}eron
π${prefix}erok
π${prefix}kemonomimi
π${prefix}cum_jpg
π${prefix}nsfw_avatar
π${prefix}erofeet
π${prefix}meow
π${prefix}wallpaper
π${prefix}waifu
π${prefix}trap
π${prefix}lewd
π${prefix}pussy_jpg
π${prefix}futanari
π${prefix}lewdk
π${prefix}solog
π${prefix}smug
π${prefix}cum
π${prefix}slap
π${prefix}les
π${prefix}erokemo
π${prefix}bj
π${prefix}pwankg
π${prefix}pat
π${prefix}poke
π${prefix}feed
π${prefix}nsfw_neko_gif
π${prefix}pussy
π${prefix}feetg
π${prefix}baka
π${prefix}hug
π${prefix}kiss
π${prefix}tickle
π${prefix}spank
π${prefix}kuni
π${prefix}classic
π${prefix}boobs
π${prefix}anal
π${prefix}ngif
π${prefix}cuddle
π${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`γ Textpro Menu γ
π${prefix}halloween2 text|text2
π${prefix}horror text|text2
π${prefix}game8bit text|text2
π${prefix}layered text|text2
π${prefix}glitch2 text|text2
π${prefix}coolg text|text2
π${prefix}coolwg text|text2
π${prefix}realistic text|text2
π${prefix}space3d text|text2
π${prefix}gtiktok text|text2
π${prefix}stone text|text2
π${prefix}marvel text|text2
π${prefix}marvel2 text|text2
π${prefix}pornhub text|text2
π${prefix}avengers text|text2
π${prefix}metalr text|text2
π${prefix}metalg text|text2
π${prefix}metalg2 text|text2
π${prefix}halloween2 text|text2
π${prefix}lion text|text2
π${prefix}wolf_bw text|text2
π${prefix}wolf_g text|text2
π${prefix}ninja text|text2
π${prefix}3dsteel text|text2
π${prefix}horror2 text|text2
π${prefix}lava text|text2
π${prefix}bagel text|text2
π${prefix}blackpink text
π${prefix}rainbow2 text
π${prefix}water_pipe text
π${prefix}halloween text
π${prefix}sketch text
π${prefix}sircuit text
π${prefix}discovery text
π${prefix}metallic2 text
π${prefix}fiction text
π${prefix}demon text
π${prefix}transformer text
π${prefix}berry text
π${prefix}thunder text
π${prefix}magma text
π${prefix}3dstone text
π${prefix}neon text
π${prefix}glitch text
π${prefix}harry_potter text
π${prefix}embossed text
π${prefix}broken text
π${prefix}papercut text
π${prefix}gradient text
π${prefix}glossy text
π${prefix}watercolor text
π${prefix}multicolor text
π${prefix}neon_devil text
π${prefix}underwater text
π${prefix}bear text
π${prefix}wonderfulg text
π${prefix}christmas text
π${prefix}neon_light text
π${prefix}snow text
π${prefix}cloudsky text
π${prefix}luxury2 text
π${prefix}gradient2 text
π${prefix}summer text
π${prefix}writing text
π${prefix}engraved text
π${prefix}summery text
π${prefix}3dglue text
π${prefix}metaldark text
π${prefix}neonlight text
π${prefix}oscar text
π${prefix}minion text
π${prefix}holographic text
π${prefix}purple text
π${prefix}glossyb text
π${prefix}deluxe2 text
π${prefix}glossyc text
π${prefix}fabric text
π${prefix}neonc text
π${prefix}newyear text
π${prefix}newyear2 text
π${prefix}metals text
π${prefix}xmas text
π${prefix}blood text
π${prefix}darkg text
π${prefix}joker text
π${prefix}wicker text
π${prefix}natural text
π${prefix}firework text
π${prefix}skeleton text
π${prefix}balloon text
π${prefix}balloon2 text
π${prefix}balloon3 text
π${prefix}balloon4 text
π${prefix}balloon5 text
π${prefix}balloon6 text
π${prefix}balloon7 text
π${prefix}steel text
π${prefix}gloss text
π${prefix}denim text
π${prefix}decorate text
π${prefix}decorate2 text
π${prefix}peridot text
π${prefix}rock text
π${prefix}glass text
π${prefix}glass2 text
π${prefix}glass3 text
π${prefix}glass4 text
π${prefix}glass5 text
π${prefix}glass6 text
π${prefix}glass7 text
π${prefix}glass8 text
π${prefix}captain_as2 text
π${prefix}robot text
π${prefix}equalizer text
π${prefix}toxic text
π${prefix}sparkling text
π${prefix}sparkling2 text
π${prefix}sparkling3 text
π${prefix}sparkling4 text
π${prefix}sparkling5 text
π${prefix}sparkling6 text
π${prefix}sparkling7 text
π${prefix}decorative text
π${prefix}chocolate text
π${prefix}strawberry text
π${prefix}koifish text
π${prefix}bread text
π${prefix}matrix text
π${prefix}blood2 text
π${prefix}neonligth2 text
π${prefix}thunder2 text
π${prefix}3dbox text
π${prefix}neon2 text
π${prefix}roadw text
π${prefix}bokeh text
π${prefix}gneon text
π${prefix}advanced text
π${prefix}dropwater text
π${prefix}wall text
π${prefix}chrismast text
π${prefix}honey text
π${prefix}drug text
π${prefix}marble text
π${prefix}marble2 text
π${prefix}ice text
π${prefix}juice text
π${prefix}rusty text
π${prefix}abstra text
π${prefix}biscuit text
π${prefix}wood text
π${prefix}scifi text
π${prefix}metalr text
π${prefix}purpleg text
π${prefix}shiny text 
π${prefix}jewelry text
π${prefix}jewelry2 text
π${prefix}jewelry3 text
π${prefix}jewelry4 text
π${prefix}jewelry5 text
π${prefix}jewelry6 text
π${prefix}jewelry7 text
π${prefix}jewelry8 text
π${prefix}metalh text
π${prefix}golden text
π${prefix}glitter text
π${prefix}glitter2 text
π${prefix}glitter3 text
π${prefix}glitter4 text
π${prefix}glitter5 text
π${prefix}glitter6 text
π${prefix}glitter7 text
π${prefix}metale text
π${prefix}carbon text
π${prefix}candy text
π${prefix}metalb text
π${prefix}gemb text
π${prefix}3dchrome text
π${prefix}metalb2 text
π${prefix}metalg text
π${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`γ Others γ
π${prefix}ttp [text]
π${prefix}attp [text]
π${prefix}afk [reason]
π${prefix}translate kode_bahasa text
π${prefix}kalkulator [query]
π${prefix}smeme [text]
π${prefix}smeme2 [text|text]
π${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`γ Game Menu γ
π${prefix}kuismath
π${prefix}tebak [option]
π${prefix}tekateki
π${prefix}susunkata
π${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`γ Asupan Menu γ
π${prefix}chika
π${prefix}delvira
π${prefix}ayu
π${prefix}bunga
π${prefix}aura
π${prefix}nisa
π${prefix}ziva
π${prefix}yana
π${prefix}viona
π${prefix}syania
π${prefix}riri
π${prefix}syifa
π${prefix}mama_gina
π${prefix}alcakenya
π${prefix}mangayutri
π${prefix}rikagusriani
π${prefix}asupan
π${prefix}bocil
π${prefix}geayubi
π${prefix}santuy
π${prefix}ukhty
π${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`γ Random Cewe γ
π${prefix}china 
π${prefix}indonesia 
π${prefix}malaysia 
π${prefix}thailand 
π${prefix}korea 
π${prefix}japan 
π${prefix}vietnam 
π${prefix}jenni 
π${prefix}jiso 
π${prefix}lisa  
π${prefix}rose
`
}

exports.tqto = () =>{
	return`γ TqTo γ 
πMy God
πMy Parents
πFatih A.
πHandraMz
πAnd All Support
`
}