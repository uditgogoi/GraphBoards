try{
s_a("aLUfP");
var s_fZb=function(a){s_F.call(this,a.Ja);var b=this;this.window=a.service.window.get();this.Aa=this.rk();this.wa=window.orientation;this.oa=function(){var c=b.rk(),d=b.HPa()&&90===Math.abs(window.orientation)&&b.wa===-1*window.orientation;b.wa=window.orientation;if(c!==b.Aa||d){b.Aa=c;d=s_e(b.Xd);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=new s_OKb(c);try{e(f)}catch(g){s_ca(g)}}}};this.Xd=new Set;this.window.addEventListener("resize",this.oa);this.HPa()&&this.window.addEventListener("orientationchange",
this.oa)};s_n(s_fZb,s_F);s_fZb.kb=s_F.kb;s_fZb.Fa=function(){return{service:{window:s_ri}}};s_=s_fZb.prototype;s_.addListener=function(a){this.Xd.add(a)};s_.removeListener=function(a){this.Xd.delete(a)};
s_.rk=function(){if(s_xe()&&s_Td()&&!navigator.userAgent.includes("GSA")){var a=s_Nf(this.window);a=new s_Ef(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.$b()||(s_xe()?s_xe()&&s_Td()&&!navigator.userAgent.includes("GSA"):this.window.visualViewport)?s_Nf(this.window):new s_Ef(this.window.innerWidth,this.window.innerHeight);return a.height<a.width};
s_.destroy=function(){this.window.removeEventListener("resize",this.oa);this.window.removeEventListener("orientationchange",this.oa)};s_.$b=function(){return s_gZb};s_.HPa=function(){return"orientation"in window};var s_gZb=!1;s_Ni(s_0ua,s_fZb);

s_gZb=!0;

s_b();

}catch(e){_DumpException(e)}
// Google Inc.
