let texto_original_botao = document.querySelector('.botao-fim').innerHTML;
const texto_modificado_botao = 'Fechar pedido';
const url_base_zap = 'https://wa.me/5521999901234?text='

function toggleSelection(el){
    el.classList.add('selected');  // se quisesse desmarcar o item selecionado, bastaria trocar add por toggle
    el.querySelector('.checkmark').classList.remove('hidden'); // e aqui trocaria remove por toggle
    
    let food_items = document.querySelectorAll('.food-item');
    for(let i=0; i< food_items.length; i++){
        if (food_items[i] !== el){
            if (food_items[i].classList[1] === el.classList[1]){
                food_items[i].classList.remove('selected');
                food_items[i].querySelector('.checkmark').classList.add('hidden');
            }
        }
    }

    let botao = document.querySelector('.botao-fim');
    if(document.querySelectorAll('.selected').length === 3 ){
        botao.classList.add('fechar-pedido');
        botao.innerHTML = texto_modificado_botao;
    } else{
        botao.classList.remove('fechar-pedido');
        botao.innerHTML = texto_original_botao;
    }
}

function envioPedido(){
    const el_prato = document.querySelectorAll('.selected')[0];
    const el_bebida = document.querySelectorAll('.selected')[1];
    const el_sobremesa = document.querySelectorAll('.selected')[2];

    // calcular preço: obter texto do preço -> remover 'R$' -> substituir , por . -> converter pra número
    const preco_prato = Number(el_prato.querySelector('.price').innerHTML.slice(2).replace(',','.'))
    const preco_bebida = Number(el_bebida.querySelector('.price').innerHTML.slice(2).replace(',','.'))
    const preco_sobremesa = Number(el_sobremesa.querySelector('.price').innerHTML.slice(2).replace(',','.'))
    const preco_total = (preco_prato + preco_bebida + preco_sobremesa).toFixed(2);

    const nome = prompt('Qual o seu nome?');
    const endereco = prompt('Qual o seu endereço?');
    const msg_zap = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${el_prato.querySelector('.item-name').innerHTML}
    - Bebida: ${el_bebida.querySelector('.item-name').innerHTML}
    - Sobremesa: ${el_sobremesa.querySelector('.item-name').innerHTML}
    Total: R$ ${preco_total}
    
    Nome: ${nome}
    Endereço: ${endereco}`);
    window.open(url_base_zap + msg_zap);   
}
