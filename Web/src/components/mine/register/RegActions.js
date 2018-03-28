export function Regrefresh(_config){
    return{
        type:_config.type,
        url:_config.url,
        method:_config.method,
        data:_config.data || {},
        name:_config.name
    }
}