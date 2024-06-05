const utils = require("./ar-config");


module.exports = function (context) {
    const confs = utils.getConfigs();
    //const appId = utils.getAppIdentifier(context.opts.projectRoot + confs.configPathAndroid);
    
    utils.logAppFolders(context.opts.projectRoot);
    utils.logAppFolders(context.opts.projectRoot + "/www");
    utils.logAppFolders(context.opts.projectRoot + "/res");
    utils.logAppFolders(context.opts.projectRoot + "/hooks");
    utils.logAppFolders(context.opts.projectRoot + "/plugin-resources");
    
    utils.logAppFolders(context.opts.projectRoot + confs.androidAppPath);
    utils.logAppFolders(context.opts.projectRoot + confs.androidMainPath);
    utils.logAppFolders(context.opts.projectRoot + confs.androidPath);
    utils.logAppFolders(context.opts.projectRoot + confs.androidRootPath);
    //utils.logAppFolders(context.opts.projectRoot + confs.androidMainPath + "www");
    
    //utils.generateUnityLibrary();
    //utils.unzipUnityLibrary();
    utils.getAndUnzipUnityLibrary(context.opts.projectRoot);

    //utils.logFile(context.opts.projectRoot + confs.androidRootPath + "/settings.gradle");
    

}
