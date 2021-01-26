import{auth as e}from"firebaseui";import i from"firebase/app";import"firebase/auth";function t(){return(t=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}class s{constructor(t){if(this.dispatch=t.dispatch,this.signInOptions=t.signInOptions,t.firebaseConfig)this.firebase=i.initializeApp(t.firebaseConfig,"useAuth");else{if(!t.firebaseApp)throw"Please provide firebaseConfig or initialized firebaseApp";this.firebase=t.firebaseApp}this.ui=new e.AuthUI(this.firebase.auth()),this.firebase.auth().onAuthStateChanged(this.onAuthStateChanged)}onAuthStateChanged(e){e&&this.dispatch("AUTHENTICATED",{user:this.firebase.auth().currentUser,authResult:{expiresIn:3600}})}static addDefaultParams(e,s){return t({signInOptions:[i.auth.EmailAuthProvider.PROVIDER_ID]},e)}authorize(){this.dispatch("LOGIN"),this.ui.start("#firebaseui-auth-container",{signInOptions:this.signInOptions,signInFlow:"popup",callbacks:{signInSuccessWithAuthResult:e=>(this.dispatch("AUTHENTICATED",{user:this.firebase.auth().currentUser,authResult:t({},e,{expiresIn:3600})}),!1)}})}signup(){}logout(e){this.firebase.auth().signOut()}userId(e){var i;return null==(i=this.firebase.auth().currentUser)?void 0:i.uid}userRoles(e){return[]}async handleLoginCallback(){return!1}async checkSession(){const e=this.firebase.auth().currentUser;if(e)return await e.reload(),{user:e,authResult:{expiresIn:3600}};throw new Error("Session invalid")}}export{s as FirebaseUI};
//# sourceMappingURL=FirebaseUI.modern.js.map
