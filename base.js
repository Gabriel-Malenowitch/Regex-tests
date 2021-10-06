export function print(text, text2){
	const n = document.createElement('p')
	n.innerHTML = `${text}  ${text2}`
	n.style.color = text?'#00BB00':'#DE5555'
	n.style.fontSize = "20px"
	document.body.appendChild(n)
}
export const base = `
João trouxe     flores para sua amada namorada em 10 de janeiro de 1970.
Maria era o nome dela.


Foi um ano excelente na vida de joão. Teve 5 filhos. todos adultos atualente. maria, hoje sua esposa, 
ainda faz aquele café com pão de queijo nas tardes de domingo. 
Também né! Sendo a boa mineira que é, nunca esquece seu famoso pão de queijo. 
Não canso de ouvir a Maria:
"Jooooooãooooooooooo, o café tá prontinho aqui, Veeemm"!
`

export const arquivos = [
    "sla.jpg",
    "cas.JPEG",
    "ass.jpeg",
    "aasfss.jpeEEEEeeeeEg",
    "gksaljdg.mp4",
    "lista de compras.txt"
]

export const htmlExample = `
<html lang="en"><head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body cz-shortcut-listen="true">
    <script type="module" src="03.js"></script>
<!-- Code injected by live-server -->
<script type="text/javascript">
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
</body></html>`

export const emails = [
    'gabrielbotelhomalenowitch@gmail.com',
    'gabriel.malenowitch021@academico.ufgd.edu.br',
    '021.84@estudante.sed.sc.gov.br',
    'gabrielmalenowitch6498@gmail.com',
    'gabriel20012003malenowitch@gmail.com',
    'gabriel20012003malenowitch@.com',
]

export const cpfs = `
Os CPFs são:
  254.224.877-45 215.978.456-12 047.258.369-96 
  963.987.321-00
  963.987.32a.00 (NÃO VÁLIDO)
  963.987.32-00 (NÃO VÁLIDO)
`;

export const cpfs2 = `254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00`;

export const ips = `
Os Ips são:
   0.0.0.0
   192.168.0.25
        10.10.5.12
        10.01.10.20 (ESTE IP NÃO É VÁLIDO)
        10.021.08.20 (ESTE IP NÃO É VÁLIDO)
   255.255.255.255
`;
export const ip = [
	"200.25.52.192/29",
	"0.0.0.0/80",
	"255.255.255.255/9999",
	"255.255.255.255/99999",
	"52.67.255.165/32",
	"170.82.175.0/24",
	"187.16.245.192/29",
	"201.148.101.24/29",
	"200.189.173.48/28",
	"200.98.28.70/32",
	"187.85.159.176/29",
	"170.84.29.208/29",
	"34.95.168.58/32",
	"45.63.104.13/32",
	"140.82.27.226/32",
	"45.77.97.241/32",
	"207.246.123.237/32",
	"207.148.26.195/32",
	"186.211.161.0/29",
	"45.238.96.152/29",
	"34.95.213.225/32",
	"34.95.209.169/32",
	"35.247.222.78/32",
	"34.95.253.129/32",
	"34.95.148.131/32",
	"34.95.164.249/32",
	"129.159.48.87/32",
	"200.25.56.64/28",
]
export const CPFs = [
	"254.224.877-45",
	"215.978.456-12",
	"047.258.369-96",
	"963.987.32a.00",
]

export const alfabeto =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ®¡ 0123456789 ¡';
          
export const html = '<p>Olá mundo</p> <p>Olá de novo</p> <div>Sou a div</div>';
export const html2 = `<p 
data-teste='teste' 
class="teste teste">
  Olá mundo
</p> <p>Olá mundo</p> <div>Sou a div</div>`;

export const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive
`;

