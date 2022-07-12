const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '5475638025:AAGXofQC2-Qi2vlpKluCxC8kXtzgReObp4k';

const bot = new TelegramBot(TOKEN, {
    polling:true
})


bot.on('message', (msg)=>{
    const chatId = msg.chat.id;  

        // if(msg.text % 2 == 0){
        //     bot.sendMessage(chatId, 'Число парне');
        // }
        // else{
        //     bot.sendMessage(chatId, 'Число непарне')
        // }
    })
    function coinFlip(){
        let res = Math.floor(Math.random()*2)
        return res
    }
    
     
    var DateThis = new Date()
    bot.on('message', (msg)=>{
        const chatId = msg.chat.id;
        
        console.log('['+DateThis.getDate()+'-'+parseInt(DateThis.getMonth()+1)+'-'+DateThis.getFullYear()+ ' '+DateThis.getHours()+':'+DateThis.getMinutes()+':'+DateThis.getSeconds()+ ']'+ ' '+ msg.from.first_name + ' (@'+msg.from.username+'): '+ msg.text)
        

        // console.log('['+DateThis.getDate()+'-'+parseInt(DateThis.getMonth()+1)+'-'+DateThis.getFullYear()+ ' '+DateThis.getHours()+':'+DateThis.getMinutes()+':'+DateThis.getSeconds()+ ']')

        if(msg.text === 'Рандомне число') {
            let random = Math.floor(Math.random()*100);
            bot.sendMessage(chatId, random);
        }
        else if(msg.text === 'Підкинь монетку'){
            if(coinFlip() == 0){
                bot.sendMessage(chatId, 'Копійка')
            }
            else{
                bot.sendMessage(chatId, 'Герб');
            }
        }
        else if(msg.text === 'Отримати контакт'){
            bot.sendContact(chatId, '+3801234567', 'Максимко');
        }

        else{
        bot.sendMessage(chatId, 'Привіт '+ msg.from.first_name,{
            reply_markup: {
                keyboard: [
                    ['Рандомне число', 'Підкинь монетку', 'Отримати контакт']
                ],
                resize_keyboard: true
            }
        });
        }
        
    })
    

