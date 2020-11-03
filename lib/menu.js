const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ArugaZ

Instagram: https://instagram.com/ini.arga/

Best regards, ArugaZ.`
}

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
           〘welcome to sinchan bot〙
Berikut adalah beberapa fitur yang ada pada bot Sinchan!✨

Creator:
. *${prefix}sticker*
. *${prefix}stickergif*
. *${prefix}stickergiphy*
. *${prefix}meme*
. *${prefix}quotemaker*

Islam:
. *${prefix}infosurah*
. *${prefix}surah*
. *${prefix}tafsir*
. *${prefix}ALaudio*

Premium: [Belum Tersedia]
. *${prefix}pornhub*
. *${prefix}simsimi*

Download: [New]
. *${prefix}instagram*
. *${prefix}ytmp3*
. *${prefix}ytmp4*

Search Any:
. *${prefix}images*
. *${prefix}sreddit*
. *${prefix}resep*
. *${prefix}nekopoi*
. *${prefix}stalkig*
. *${prefix}wiki*
. *${prefix}cuaca*
. *${prefix}chord*
. *${prefix}ss*

Random Teks:
. *${prefix}fakta*
. *${prefix}pantun*
. *${prefix}katabijak*

Random Images:
. *${prefix}anime*
. *${prefix}kpop*
. *${prefix}memes*

Lain-lain:
. *${prefix}tts*
. *${prefix}translate*
. *${prefix}resi*
. *${prefix}ceklokasi*
. *${prefix}shortlink*

Tentang Bot:
. *${prefix}tnc*
. *${prefix}donasi*
. *${prefix}ownerbot*
. *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
. *${prefix}ban* - banned
. *${prefix}bc* - promosi
. *${prefix}leaveall* - keluar semua grup
. *${prefix}clearall* - hapus semua chat

Maaf Bot Ini Sedang Dalam Pengembangan,Mohon Doa dan Donasinya:)
Hope you have a great day!✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
. *${prefix}kickall*
-owner adalah pembuat grup.

⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

. *${prefix}add*
. *${prefix}kick* @tag
. *${prefix}promote* @tag
. *${prefix}demote* @tag
. *${prefix}tagall*
. *${prefix}del*

*JOIN KOMUNITAS:*
*grup:*
>https://chat.whatsapp.com/Igh2CFotKTQCnUpbaO7zvL
*Link Discord:*
>https://discord.gg/PEUYtk9
*owner:*
>https://wa.me/6282134580805
`
}

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot Sinchan, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

Donasi dengan link
>https://saweria.co/SinchanBot
Kirim [Pulsa,OVO,Dana,GoPay] ke nomor owner:
>082134580805

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot Sinchan.

Terimakasih.`
}
