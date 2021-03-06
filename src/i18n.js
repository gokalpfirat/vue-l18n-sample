import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    login: "Login / Register",
    dropdown: {
      logout: "Logout",
      email: "Email",
      name: "Name"
    },
    languages: {
      en: "English",
      tr: "Turkish"
    },
    homepage: {
      menuName: "Homepage",
      pageName: "Sample",
      title: "Hello World",
      text:
        "Why I say old chap that is spiffing, wellies blow off skive off get stuffed mate I brown bread barney, only a quid bugger ruddy hotpot nancy boy butty. You mug Jeffrey the BBC lavatory chap cor blimey guvnor up the kyver horse play Why it's all gone to pot, at public school barney spend a penny that bodge he nicked it happy days jolly good the wireless, gutted mate super cuppa twit he lost his bottle me old mucker is cup of tea. Show off show off pick your nose and blow off Elizabeth on your bike mate Charles brolly I cheeky barmy bobby boot in my flat, bleeding Jeffrey spiffing nice one burke young delinquent chip shop so I said sloshed don't get shirty with me, I don't want no agro mush lavatory spend a penny cobblers Queen's English at public school bugger ummm I'm telling. Fanny around blower butty gosh off his nut spiffing good time bleeder tosser cor blimey guvnor starkers, bleeding horse play do one haggle cockup lost the plot brown bread morish cuppa lurgy, plastered Richard mush chimney pot barmy give us a bell baking cakes amongst. Bog bender skive off vagabond up the kyver bleeding, Richard I grub squiffy, tinkety tonk old fruit a load of old tosh a buggered. Morish I Queen's English vagabond chap nice one he legged it knackered pear shaped fantastic, a starkers gosh butty easy peasy only a quid bamboozled lost the plot, James Bond it's all gone to pot cobblers naff so I said bum bag hanky panky car boot."
    },
    contact: {
      menuName: "Contact Us",
      pageName: "Contact Us",
      title: "Reach us by filling form",
      send: "Send",
      name_placeholder: "Name",
      email_placeholder: "Email",
      phone_placeholder: "Phone",
      country_placeholder: "Choose your country",
      message_placeholder: "Write your message here...",
      success: "Form successfully sent!",
      error: "Your informations are missing or wrong!"
    },
    modal: {
      titleLogin: "Login",
      titleRegister: "Register",
      name_placeholder: "Name",
      email_placeholder: "Email",
      password_placeholder: "Password",
      noAccount: "Don't you have an account? Click to register!",
      haveAccount: "Have account already? Click to login!",
      login: "Login",
      register: "Register",
      unsuccessfullLogin: "Unsuccesfull login!",
      unsuccessfullRegister: "Missing inputs!",
      registerAlreadyInUse: "Email alrady in use, try to login!"
    },
    country: {
      TR: "Turkey",
      US: "United States of America",
      GB: "United Kingdom",
      DE: "Germany",
      SE: "Sweden",
      KE: "Kenya",
      BR: "Brazil",
      ZW: "Zimbabwe"
    }
  },
  tr: {
    login: "Giri?? / Kay??t",
    languages: {
      en: "??ngilizce",
      tr: "T??rk??e"
    },
    dropdown: {
      logout: "????k????",
      email: "E-Posta",
      name: "??sim"
    },
    homepage: {
      title: "Merhaba D??nya",
      menuName: "Anasayfa",
      text:
        "Neden f????k??ran ya??l?? ahbap diyorum, k??stahlar dolup ta????yor dostum ben esmer ekmek barney, sadece bir pound pislik k??rm??z?? hotpot nancy boy butty. BBC tuvalet adam?? Jeffrey'i kand??r??yorsun, kyver at?? oyununa hayk??r??yorsun Barney neden her ??ey ????pe gitti, devlet okulunda barney bir kuru?? harcad??, onu ??ald?? mutlu g??nler jolly iyi kablosuz, gutted mate super cuppa twit ??i??esini kaybetti Benim ya??l?? pislik bir fincan ??ayd??r. G??steri havas?? burnunu ??ek ve Elizabeth'i bisikletle u??ur dostum Charles brolly Dairemde ars??z serseri bobby botum, kanayan Jeffrey g??zel bir burke gen?? su??lu cips d??kkan??n?? kokluyorum, bu y??zden b??z??lme benimle b??z??lme dedim. 'Hi??bir tar??msal lavabonun bir kuru??unu ayakkab??c??lara harcamak istemiyorum Krali??e'nin ??ngilizcesi devlet okulunda herif hmm diyorum. Fanny ??fleyici butty f??nd??????ndan iyi vakit ge??iriyor kanama f??rlat??c??s?? cor blimey guvnor starkers, kanayan at oyunu bir pazarl??k yap, komployu kaybetti kahverengi ekme??i morish cuppa lurgy, s??val?? Richard lapa baca kab?? barmy bize aralar??nda ??an pi??irme kekleri versin. Batakl??k b??k??c?? kyver kanamas??ndan s??yr??l??r, Richard ben c??l??z, tinkety tonk eski meyveyi bir s??r?? eski tosh a delirmi??. Morish I Queen'in ??ngiliz serseri ahbap g??zel olan?? bacaklar??n?? uzatt?? armut bi??imli fantastik, aptallar gosh butty easy peasy sadece bir pound doland??r??c??l??k olay ??rg??s??n?? kaybetti, James Bond her ??ey ????mlek ayakkab??c??lar??na gitti, bu y??zden serseri mendil panky araba bagaj?? dedim."
    },
    contact: {
      menuName: "Bize Ula??",
      pageName: "Bize Ula??",
      title: "Bize formu doldurarak ula??",
      send: "Yolla",
      name_placeholder: "??sim",
      email_placeholder: "E-Posta",
      phone_placeholder: "Telefon",
      country_placeholder: "??lkenizi se??in",
      message_placeholder: "Mesaj??n??z?? buraya yaz??n...",
      success: "Form ba??ar??yla g??nderildi!",
      error: "Bilgilerinizi hata veya eksik girdiniz!"
    },
    modal: {
      titleLogin: "Giri?? Yap",
      titleRegister: "Kay??t Ol",
      name_placeholder: "??sim",
      email_placeholder: "E-Posta",
      password_placeholder: "??ifreniz",
      noAccount: "Hesab??n yok mu? Kay??t olmak i??in t??kla!",
      haveAccount: "Zaten hesab??n??z var m??? Giri?? yapmak i??in t??kla!",
      login: "Giri??",
      register: "Kay??t",
      unsuccessfullLogin: "Ba??ar??s??z giri??!",
      unsuccessfullRegister: "Bilgiler eksik!",
      registerAlreadyInUse: "Email zaten kullan??l??yor, giri?? yapmay?? deneyin!"
    },
    country: {
      TR: "T??rkiye",
      US: "Amerika Birle??ik Devletleri",
      GB: "Birle??ik Krall??k",
      DE: "Almanya",
      SE: "??sve??",
      KE: "Kenya",
      BR: "Brezilya",
      ZW: "Zimbabve"
    }
  }
};

const browserLanguage = navigator.language.split("-")[0];
export const i18n = new VueI18n({
  locale: messages[browserLanguage] ? browserLanguage : "en",
  fallbackLocale: "en",
  messages
});
