const items=document.querySelectorAll('.reveal');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');observer.unobserve(entry.target)}})},{threshold:.1,rootMargin:'0px 0px -4% 0px'});items.forEach(item=>observer.observe(item));

const ozoneWork=[...document.querySelectorAll('#works .work-card')].find(card=>card.querySelector('.eyebrow')?.textContent.includes('WORK · 13')||card.querySelector('h2')?.textContent.includes('오존'));
if(ozoneWork){
  ozoneWork.classList.remove('placeholder');
  ozoneWork.innerHTML='<div class="eyebrow">WORK · BR-B</div><h2>서울 오존 가이드</h2><p>외출 전 현재 오존값을 입력하면 좋음·보통·나쁨·매우나쁨 상태와 외출 행동요령을 바로 보여주는 웹앱입니다. 과제 10의 서울 91일 연구에서 기온과 오존의 뚜렷한 관계가 확인되지 않았다는 결과를 반영해, 기온만으로 현재 오존을 예측하지 않고 실제 오존값을 기준으로 판단하도록 설계했습니다.</p><div class="links"><a class="mini" href="https://yelim11.github.io/SKT_ALEPH_ozone-heart/" target="_blank" rel="noopener">앱 열기</a><a class="mini" href="https://github.com/yelim11/SKT_ALEPH_ozone-heart" target="_blank" rel="noopener">소스 보기</a></div>';
}
const worksHead=document.querySelector('#works .group-head p');
if(worksHead) worksHead.textContent='과제 10의 연구 결과와 그 결과를 실제 외출 판단에 활용한 BR-B 앱을 함께 대표작으로 두었습니다.';
