/* importar o módulo do woocommerce */ 
var WooCommerceAPI = require('woocommerce-api');

module.exports = function(application){
   
    application.get('/',function(req, res){
        res.send('<h1>Você não pode acessar essa página diretamente!<h1/>');
    })

    application.get('/:img_url',function(req, res){
        let img = req.params.img_url;
        res.send(img);
    })

    //captura um pedido especifico a partir do número do ID
    application.post('/orders', function (req, res) {

        let order_id = req.param('order_id');
        
        var WooCommerce = new WooCommerceAPI({
			url: 'https://instaarts.com',
			consumerKey: 'ck_2b431e387513e9f7355932613b0c8a8ff3c9c9cc',
			consumerSecret: 'cs_c44fc9d1ef16aa8f62d60d09dafe38d97343a8bf',
			wpAPI: true,
            version: 'wc/v3',
            queryStringAuth: true
        });
        

        WooCommerce.getAsync(`orders/${order_id}`)
            .then(function(result) {
                var resultado = JSON.parse(result.toJSON().body);
                var data_info = new Array; 

                for(var key in resultado.line_items) {
                    data_info.push(resultado.line_items[key].name, resultado.line_items[key].meta_data);
               } 
                render(data_info);
            })
        function render(result){
            res.send({
                result: result
            })
        }
    });

    /*
    //captura todos os pedidos realizados no site 
     application.post('/pedidos', function(req, res){
        
        client_token = req.param('token');

        var WooCommerce = new WooCommerceAPI({
			url: 'https://instaarts.com',
			consumerKey: 'ck_2b431e387513e9f7355932613b0c8a8ff3c9c9cc',
			consumerSecret: 'cs_c44fc9d1ef16aa8f62d60d09dafe38d97343a8bf',
			wpAPI: true,
            version: 'wc/v3',
            queryStringAuth: true
        });

        const token =  '345wmZnv4kx213';

        if (client_token === token) {

            WooCommerce.get('orders', function(err, data, res) {
                let resultado = JSON.parse(res);

                render(resultado);
            });
        }else{
            render("Você não possui as credênciais para acessar esses dados");
        }
        function render(result){
            res.send({
                result: result
            })
        }
     });
    */
}