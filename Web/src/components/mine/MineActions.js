export function MineRefresh(config){
    return{
        type:config.type,
        url:config.url,
        method:config.method,
        data:config.data || {}
    }
}