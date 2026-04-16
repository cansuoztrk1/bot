const cheerio = require('cheerio');
const { JSDOM } = require('jsdom');
const https = require('https');

// Chalk yerine basit renkli log fonksiyonları
const log = {
    bold: (msg) => console.log('\x1b[1m' + msg + '\x1b[0m'),
    red: (msg) => console.log('\x1b[31m' + msg + '\x1b[0m'),
    green: (msg) => console.log('\x1b[32m' + msg + '\x1b[0m'),
    yellow: (msg) => console.log('\x1b[33m' + msg + '\x1b[0m'),
    blue: (msg) => console.log('\x1b[34m' + msg + '\x1b[0m'),
    plain: (msg) => console.log(msg),
};

console.clear();
log.bold(`\n SWANZ PANEL \n`);
log.plain("━".repeat(50));
log.bold("  🤖 ICEBOT GARTIC.IO - PING EDITION");
log.plain("━".repeat(50));

const httpsAgent = new https.Agent({
    keepAlive: true,
    maxSockets: 100,
    timeout: 3000
});

global.ck_ = "";
global.em = function em(p) {
    let iC = ['\uFE00', '\uFE01', '\uFE02', '\uFE03', '\uFE04', '\uFE05', '\uFE06', '\uFE07', '\uFE08', '\uFE09', '\uFE0A', '\uFE0B', '\uFE0C', '\uFE0D', '\uFE0E', '\uFE0F', '\u206F', '\u206E', '\u200B', '\u200C', '\u200D', '\u2061', '\u2062', '\u2063', '\u2064', '\u2066', '\u17b4', '\u17b5', '\u2068', '\u2069'];
    let niC = 18 - p.length;
    for (let i = 0; i < niC; i++) {
        let rP = Math.floor(Math.random() * p.length);
        let rC = iC[Math.floor(Math.random() * iC.length)];
        p = p.slice(0, rP) + rC + p.slice(rP);
    }
    return p;
};

const chineseNames = [
    "EXE", "Umut Han", "baknasılvuruyorum", "nabermudur", "benefsaneyim",
];

function getNickname(baseName, nickType) {
    switch (nickType) {
        case 'invisible':
            return em(baseName);
        case 'numbers':
            const randomNum = Math.floor(Math.random() * 9000) + 1000;
            return em(baseName + randomNum);
        case 'chinese':
            const randomChinese = chineseNames[Math.floor(Math.random() * chineseNames.length)];
            return em(randomChinese);
        default:
            return em(baseName);
    }
}

function getAvatar(avatarChoice) {
    if (avatarChoice === 'random') {
        return Math.floor(Math.random() * 37);
    } else if (avatarChoice === 'null') {
        return null;
    } else {
        return parseInt(avatarChoice);
    }
}

const ips = [
    '185.246.84.66', '185.246.86.208', '108.181.54.41', '185.246.86.211',
    '108.181.90.163', '108.181.90.129', '199.71.214.121', '108.181.88.29',
    '199.71.214.89', '208.87.240.59', '108.181.6.9', '108.181.5.51',
    '108.181.3.225', '208.87.242.51', '108.181.21.229', '108.181.33.119',
    '108.181.33.135', '208.87.241.1', '108.181.34.71', '108.181.34.151',
    '108.181.32.73', '108.181.32.49', '108.181.34.45', '108.181.43.67',
    '108.181.32.63', '108.181.32.57', '108.181.32.59', '108.181.24.243',
    '108.181.34.177', '108.181.34.157', '208.87.241.169', '95.214.53.33',
    '146.19.24.89', '195.3.222.15', '195.3.223.166', '195.3.223.164',
    '185.16.39.166', '108.181.6.89', '108.181.9.39', '108.181.11.39',
    '108.181.8.179', '208.87.240.203', '108.181.2.202', '208.87.240.251',
    '108.181.3.54', '208.87.241.149', '108.181.4.237', '208.87.241.209',
    '108.181.4.241', '108.181.5.31', '208.87.240.35', '108.181.5.242',
    '208.87.242.233', '208.87.240.67', '95.214.53.48', '195.3.222.40',
    '108.181.11.173', '108.181.12.46', '108.181.11.193', '108.181.11.171',
    '108.181.11.175', '185.16.39.144', '178.211.139.238', '185.16.39.213',
    '185.246.84.18', '185.246.87.7', '138.128.242.241', '103.45.245.190',
    '104.129.128.157', '113.30.190.82', '185.237.98.122', '95.214.55.66',
    '185.241.7.16'
];

async function _813() { const res = await fetch('https://www.croxyproxy.rocks/'); const html = await res.text(); const dom = new JSDOM(html); return dom.window.document.querySelector('#request > input[type=hidden]').value }
async function getServerCsrf() { const csrfToken = await _813(); const res = await fetch('https://www.croxyproxy.rocks/servers', { method: 'POST', headers: { 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8', 'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7', 'Content-Type': 'application/x-www-form-urlencoded', 'Cache-Control': 'max-age=0', 'Upgrade-Insecure-Requests': '1' }, body: `url=&csrf=${csrfToken}` }); const html = await res.text(); const dom = new JSDOM(html); return dom.window.document.querySelector('#serverSelectorScript').getAttribute('data-csrf').slice(1, -1) }
async function m_______R() { const csrfToken = await getServerCsrf(); const postData = `url=Gartic.io&proxyServerId=63&csrf=${csrfToken}&demo=0&frontOrigin=https://www.croxyproxy.rocks`; const options = { hostname: "www.croxyproxy.rocks", path: "/requests?fso=", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "Content-Length": Buffer.byteLength(postData) } }; const req = https.request(options, res => { let rDD = ''; res.on("data", chunk => { rDD += chunk }); res.on("end", () => { const location = res.headers.location; if (location) { const resourcePath = location.split("/")[3]; ips.forEach(ip => { https.get(`https://${ip}/${resourcePath}`, prr => { (prr.headers["set-cookie"] !== undefined && prr.headers["set-cookie"] !== "") ? ck_ = prr.headers["set-cookie"] : 0; log.plain(`${prr.statusCode} - ${ip}`) }) }) } }) }); req.on("error", error => { console.error("err:", error) }); req.write(postData); req.end() }

(async () => {

await m_______R();

const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

log.bold("✓ WebSocket Server rodando na porta 8080");
log.plain("");

global.BOTS = { salas: {}, users: {} };

global.AUTO_JOIN = {
    queue: [],
    enabled: false
};
global.EXE_DRAW = false;

global.Projectile = class Projectile {
    target(t, i) {
        (Object.values(BOTS.salas).flat()).forEach((acc) => {
            if (acc.ws.readyState === 1) acc.ws.send(`42[` + t + `,` + acc.id + `]`)
        })
    }
    send(t, i) {
        (Object.values(BOTS.salas).flat()).forEach((acc) => {
            if (acc.ws.readyState === 1) acc.ws.send(`42[` + t + `,` + acc.id + `,"` + i + `"]`)
        })
    }
    draw(data) {
        (Object.values(BOTS.salas).flat()).forEach((acc, index) => {
            if (acc.ws.readyState === 1) {
                setTimeout(() => {
                    acc.ws.send(`42[10,${acc.id},${data}]`);
                }, index * 10);
            }
        });
    }
    kick(t, i) {
        (Object.values(BOTS.salas).flat()).forEach((acc) => {
            if (acc.ws.readyState === 1) acc.ws.send(`42[45,` + acc.id + `,["` + t + `",` + i + `]]`)
        })
    }
    closeAll() {
        (Object.values(BOTS.salas).flat()).forEach((acc) => {
            if (acc.ws.readyState === 1) acc.ws.close()
        })
    }
}

global.P = new Projectile();

wss.on('connection', function connection(ws) {
    log.plain("✓ Nova conexão do userscript!");
    ws.on('message', function incoming(message) {
        try {
            let i = JSON.parse(message.toString());

            if (i.c === "set_autojoin") {
                AUTO_JOIN.enabled = i.enabled;
            }

            if (i.c === "queue_request_add") {
                if (AUTO_JOIN.enabled && !AUTO_JOIN.queue.includes(i.proxyIP)) {
                    AUTO_JOIN.queue.push(i.proxyIP);
                    wss.clients.forEach(client => {
                        if (client.readyState === 1) {
                            client.send(JSON.stringify({
                                c: "queue_response_add",
                                from: "main",
                                accepted: true,
                                position: AUTO_JOIN.queue.length,
                                proxyIP: i.proxyIP
                            }));
                        }
                    });
                }
            }

            if (i.c === "user_left") {
                let room = i.room;
                let userId = i.userId;
                if (AUTO_JOIN.enabled && AUTO_JOIN.queue.length > 0) {
                    let nextProxy = AUTO_JOIN.queue.shift();
                    wss.clients.forEach(client => {
                        if (client.readyState === 1) {
                            client.send(JSON.stringify({
                                c: "join_now",
                                from: "main",
                                proxyIP: nextProxy,
                                room: room
                            }));
                        }
                    });
                }
            }

            if (i.c === "bot_joined") {
                let index = AUTO_JOIN.queue.indexOf(i.proxyIP);
                if (index !== -1) {
                    AUTO_JOIN.queue.splice(index, 1);
                }
            }

            if (i.c === "leave_all") {
                AUTO_JOIN.queue = [];
            }
            if (i.cmd && Array.isArray(i.cmd)) {
                __._ = i.cmd;
            }
        } catch (e_) { }
    })
})

const _0xa1ba = {
    async set(t, p, v, r) {
        if (Array.isArray(v) && v.length > 0) {
            const [_C0, ...args] = v;
            switch (_C0) {
                case "join":
                    (async () => {
                        try {
                            let ip = ips[Math.floor(Math.random() * ips.length)];
                            let e = await fetch("https://" + ip + "/server/?check=1&v3=1&room=" + v[1] + "&__cpo=aHR0cHM6Ly9nYXJ0aWMuaW8#", {
                                headers: {
                                    'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.120 Mobile Safari/537.36 Edge/16.16298',
                                    'Cookie': ck_[2]
                                }
                            });
                            let cookies = await e.headers;
                            let fullcookie = [];
                            for (const [key, value] of cookies) { if (key === "set-cookie") fullcookie.push(value) }
                            e = await e.text();
                            let server = e.split("https://")[1].split(".")[0];
                            let code = e.split("?c=")[1];
                            let cookiePairs = fullcookie.map(c => c.split(';')[0]);
                            cookiePairs.push(ck_[2]);
                            let cookieHeader = cookiePairs.join('; ');

                            const baseBotName = v[3] || "ICEbot";
                            const nickType = v[4] || "normal";
                            const avatarChoice = v[5] || "random";

                            const botNick = getNickname(baseBotName, nickType);
                            const botAvatar = getAvatar(avatarChoice);

                                // Server daima 1 olarak sabitlendi
                            let _ = new WebSocket("wss://" + ip + "/__cpw.php?u=" + btoa("wss://1.gartic.io/socket.io/?c=" + code + "&EIO=3&transport=websocket") + "&o=aHR0cHM6Ly9nYXJ0aWMuaW8=", {
                                headers: { 'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 650 Dual SIM) Gecko/20100101 Firefox/68.0', 'Cookie': cookieHeader }
                            });
                            _.onopen = () => { log.green(`✓ Bot conectado: ${botNick} | Avatar: ${botAvatar}`) };
                            let self = {};
                            let room = v[1];
                            _.onmessage = (m) => {
                                if (m.data === "40") {
                                    _.send(`42[3,{"v":20000,"nick":"` + botNick + `","avatar":` + botAvatar + `,"platform":2,"sala":"` + v[1].slice(2) + `"}]`)
                                }
                                let j = [];
                                try { j = JSON.parse(m.data.slice(2)); } catch (e) { }
                                switch (j[0]) {
                                    case "5":
                                        self.id = j[2];
                                        self.room = v[1];
                                        const _afkTimer = setInterval(() => {
                                            if (_.readyState === 1) {
                                                _.send('2');
                                                _.send(`42[42,` + self.id + `]`);
                                            } else {
                                                clearInterval(_afkTimer);
                                            }
                                        }, 10000);
                                        BOTS.salas[v[1]] = BOTS.salas[v[1]] || [];
                                        BOTS.salas[v[1]].push({ ws: _, id: j[2], nick: botNick });
                                        BOTS.users[v[1]] = j[5] || [];
                                        break;
                                    case "16":
                                        if (global.EXE_DRAW === true) {
                                            _.send(`42[34,` + self.id + `]`);
                                            setTimeout(() => {
                                                [
                                                    `42[10,` + self.id + `,[1,6,50,50,50,150]]`,
                                                    `42[10,` + self.id + `,[1,6,50,50,90,50]]`,
                                                    `42[10,` + self.id + `,[1,6,50,100,80,100]]`,
                                                    `42[10,` + self.id + `,[1,6,50,150,90,150]]`,
                                                    `42[10,` + self.id + `,[1,6,110,50,150,150]]`,
                                                    `42[10,` + self.id + `,[1,6,150,50,110,150]]`,
                                                    `42[10,` + self.id + `,[1,6,170,50,170,150]]`,
                                                    `42[10,` + self.id + `,[1,6,170,50,210,50]]`,
                                                    `42[10,` + self.id + `,[1,6,170,100,200,100]]`,
                                                    `42[10,` + self.id + `,[1,6,170,150,210,150]]`
                                                ].forEach((w, k) => setTimeout(() => _.send(w), k * 50));
                                            }, 1500);
                                        }
                                        break;
                                    case "47":
                                        if (global.autoreport === true) {
                                            _.send('42[35,' + self.id + ']');
                                        }
                                        break;
                                    case "23":
                                        BOTS.users[room] = BOTS.users[room] || [];
                                        if (j[1] && j[1].id) BOTS.users[room].push(j[1]);
                                        break;
                                    case "24":
                                        if (j[1]) {
                                            const userRemovido = (BOTS.users[room] || []).find(u => u.id === j[1]);
                                            if (userRemovido) {
                                                log.red(`🚫 [KICK] ${userRemovido.nick} (ID: ${j[1]})`);
                                            }
                                            BOTS.users[room] = (BOTS.users[room] || []).filter(u => u.id !== j[1]);
                                            wss.clients.forEach(client => {
                                                if (client.readyState === 1) {
                                                    client.send(JSON.stringify({
                                                        c: "user_left",
                                                        from: "bot",
                                                        room: room,
                                                        userId: j[1]
                                                    }));
                                                }
                                            });
                                        }
                                        break;
                                }
                            };
                        } catch (e) {}
                    })();
                    break;

                case "kick_id":
                    log.yellow("🚫 [KICK DIRETO] - ID: " + v[1]);
                    P.kick(v[1], true);
                    break;

                case "broadcast":
                    log.blue("💬 [BROADCAST] - " + v[1]);
                    P.send(11, v[1]);
                    P.send(13, v[1]);
                    break;

                case "autojoin":
                    if (global.autojoin) {
                        clearInterval(global.autojoin);
                        global.autojoin = null;
                        log.red("⛔ AUTOJOIN DURDURULDU");
                        wss.clients.forEach(c => { if(c.readyState===1) c.send(JSON.stringify({c:"autojoin_status",active:false})); });
                    } else {
                        log.green("🔁 AUTOJOIN AKTİF → " + v[1]);
                        const _ajRoom = v[1], _ajName = v[3], _ajNick = v[4], _ajAv = v[5], _ajSrv = v[6];
                        wss.clients.forEach(c => { if(c.readyState===1) c.send(JSON.stringify({c:"autojoin_status",active:true})); });
                        global.autojoin = setInterval(() => {
                            if (!global.autojoin) return;
                            __._ = ["join", _ajRoom, 1, _ajName, _ajNick, _ajAv, 1];
                        }, 1800);
                    }
                    break;

                case "rejoin":
                    if (global.rejoin) {
                        clearInterval(global.rejoin);
                        global.rejoin = null;
                        global.rejoinParams = null;
                        log.red("⛔ REJOIN DURDURULDU");
                        wss.clients.forEach(c => { if(c.readyState===1) c.send(JSON.stringify({c:"rejoin_status",active:false})); });
                    } else {
                        log.yellow("🔄 REJOIN AKTİF → " + v[1]);
                        global.rejoinParams = [v[1], v[2], v[3], v[4], v[5], v[6]];
                        wss.clients.forEach(c => { if(c.readyState===1) c.send(JSON.stringify({c:"rejoin_status",active:true})); });
                        // rejoin: her 5s bot sayısı düştüyse tekrar gir
                        global.rejoin = setInterval(() => {
                            if (!global.rejoin || !global.rejoinParams) return;
                            __._ = ["join", ...global.rejoinParams];
                        }, 5000);
                    }
                    break;

                case "get_draw":
                    if (global.autoGetDraw) {
                        clearInterval(global.autoGetDraw);
                        global.autoGetDraw = null;
                        log.red("❌ OTOMATİK SIRA ALMA KAPATILDI");
                    } else {
                        log.green("✅ OTOMATİK SIRA ALMA AKTİF (Sıra boşaldığı an alınacak)");
                        global.autoGetDraw = setInterval(() => {
                            const allBots = (Object.values(BOTS.salas).flat());
                            allBots.forEach((acc) => {
                                if (acc.ws.readyState === 1) {
                                    acc.ws.send(`42[34,${acc.id}]`);
                                }
                            });
                        }, 500);
                    }
                    break;

                case "autoexe":
                    EXE_DRAW = !EXE_DRAW;
                    EXE_DRAW === true ? log.yellow("EXE DRAW ENABLED.") : log.yellow("EXE DRAW DISABLED.");
                    break;

                case "draw_exe":
                    (Object.values(BOTS.salas).flat()).forEach((acc) => {
                        acc.ws.send(`42[34,` + acc.id + `]`);
                        [
                            `42[10,` + acc.id + `,[1,6,50,50,50,150]]`,
                            `42[10,` + acc.id + `,[1,6,50,50,90,50]]`,
                            `42[10,` + acc.id + `,[1,6,50,100,80,100]]`,
                            `42[10,` + acc.id + `,[1,6,50,150,90,150]]`,
                            `42[10,` + acc.id + `,[1,6,110,50,150,150]]`,
                            `42[10,` + acc.id + `,[1,6,150,50,110,150]]`,
                            `42[10,` + acc.id + `,[1,6,170,50,170,150]]`,
                            `42[10,` + acc.id + `,[1,6,170,50,210,50]]`,
                            `42[10,` + acc.id + `,[1,6,170,100,200,100]]`,
                            `42[10,` + acc.id + `,[1,6,170,150,210,150]]`
                        ].forEach((w, k) => setTimeout(() => acc.ws.send(w), k * 50));
                    });
                    break;

                case "autofarm":
                    global.autofarm = !global.autofarm;
                    log.yellow(`🌾 AUTOFARM: ${global.autofarm ? 'AKTİF' : 'KAPALI'}`);
                    break;

                case "autoreport":
                    global.autoreport = !global.autoreport;
                    log.yellow(`📢 AUTOREPORT: ${global.autoreport ? 'AKTİF' : 'KAPALI'}`);
                    break;

                case "skip":
                    P.target(25);
                    break;

                case "exit":
                    log.red("❌ [EXIT] - Desconectando bots");
                    if (global.autojoin) { clearInterval(global.autojoin); global.autojoin = null; }
                    if (global.rejoin)   { clearInterval(global.rejoin);   global.rejoin = null; }
                    wss.clients.forEach(c => { if(c.readyState===1) { c.send(JSON.stringify({c:"autojoin_status",active:false})); c.send(JSON.stringify({c:"rejoin_status",active:false})); }});
                    P.target(24);
                    setTimeout(() => {
                        P.closeAll();
                        global.BOTS = { salas: {}, users: {} };
                        AUTO_JOIN.queue = [];
                    }, 2000);
                    break;
            }
        }
        return Reflect.set(t, p, v, r);
    }
};

globalThis.__ = new Proxy({}, _0xa1ba);

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');
let cmd = '';
process.stdin.on('data', (key) => {
    if (key === '\r') {
        if (cmd === "exit") __._ = ["exit"];
        if (cmd.toLowerCase() === "exe") {
            EXE_DRAW = !EXE_DRAW;
            EXE_DRAW === true ? log.yellow("EXE DRAW ENABLED.") : log.yellow("EXE DRAW DISABLED.");
        }
        cmd = '';
    } else if (key === '\u0003') process.exit();
    else cmd += key;
});

process.on('uncaughtException', function (e) {});

})();
