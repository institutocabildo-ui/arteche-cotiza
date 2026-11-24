const views=[...document.querySelectorAll(".view")];
const nav=[...document.querySelectorAll(".nav-item")];
function openView(id){
  views.forEach(v=>v.classList.toggle("active",v.id===id));
  nav.forEach(n=>n.classList.toggle("active",n.dataset.view===id));
  if(id==="inicio") history.replaceState(null,"",location.pathname);
  else history.replaceState(null,"","#"+id);
  window.scrollTo({top:0,behavior:"instant"});
}
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>openView(b.dataset.view)));
document.querySelectorAll("[data-open]").forEach(b=>b.addEventListener("click",()=>openView(b.dataset.open)));
function routeFromHash(){const id=location.hash.slice(1);if(views.some(v=>v.id===id))openView(id)}
window.addEventListener("hashchange",routeFromHash);routeFromHash();
let installPrompt=null;const installButton=document.getElementById("install");
window.addEventListener("beforeinstallprompt",event=>{event.preventDefault();installPrompt=event;installButton.hidden=false});
installButton.addEventListener("click",async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;installButton.hidden=true});
if("serviceWorker" in navigator && location.protocol.startsWith("http"))navigator.serviceWorker.register("./sw.js").catch(error=>console.warn("Service worker no disponible",error));
// Native AdMob test banner; browser/PWA sessions remain ad-free.
window.addEventListener("load", () => {
  window.startArtecheAdMob?.().catch(error => console.warn("AdMob skipped", error));
});
