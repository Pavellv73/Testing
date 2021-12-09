import Vue from 'vue'; // eslint-disable-line

const VuePopup = {
  install(V_) {
    const V = V_;

    V.prototype.$popups = {
      popups: [],
      register(popup) {
        const registered = this.popups.filter(popup_ => popup_.name === popup.name);
        if (registered.length === 0) {
          this.popups.push(popup);
        }
      },
      open(popupName) {
        let activePopup;
        this.popups.forEach((popup_) => {
          const popup = popup_;
          if (popup.name === popupName) {
            activePopup = popup;
          } else {
            popup.isOpen = false;
          }
        });
        if (activePopup !== undefined) {
          activePopup.isOpen = true;
        } else {
          // eslint-disable-next-line
          console.log('popup not find!');
        }
      },
      close(popupName) {
        const popup = this.popups.filter(popup_ => popup_.name === popupName)[0];
        if (popup.isOpen !== undefined) popup.isOpen = false;
      },
    };
  },
};

Vue.use(VuePopup);
