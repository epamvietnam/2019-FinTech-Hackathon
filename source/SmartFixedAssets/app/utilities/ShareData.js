export default class ShareData {
    static myInstance = null;

    _currentItem = null;

    static getInstance() {
        if (ShareData.myInstance == null) {
            ShareData.myInstance = new ShareData();
        }
        return this.myInstance;
    }

    getCurrentItem() {
        return this._currentRouteName;
    }

    setCurrentItem(item) {
        this._currentRouteName = item;
    }
}
