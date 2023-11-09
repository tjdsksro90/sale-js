function showPrice(){
  const price = document.getElementById('price').value;
  const count = document.getElementById('count').value;

  const savePrice = price * ( count / 100 );
  const resultPrice = price - savePrice;

  document.getElementById('result').innerHTML = `
    <div>상품의 원래 가격은 <span class='price'>${price}원</span>이고,</div>
    <div>할인율은 <span class='count'>${count}%</span>입니다.</div>
    <div><span class='save-price'>${savePrice}원</span>을 절약한</div>
    <div><span class='result-price'>${resultPrice}원</span>에 구매 가능합니다.</div>
  `;
}
