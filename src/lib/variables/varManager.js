let storage = [];

module.exports = {

    storeVar: (varName, varValue, varType) => {
        storage.push({
            varName,
            varValue,
            varType,
        });
    },

    _dev_showStorage: () => { return storage; },

};