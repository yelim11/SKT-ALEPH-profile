const items=document.querySelectorAll('.reveal');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');observer.unobserve(entry.target)}})},{threshold:.1,rootMargin:'0px 0px -4% 0px'});items.forEach(item=>observer.observe(item));

const work13=[...document.querySelectorAll('#works .work-card')].find(card=>card.querySelector('.eyebrow')?.textContent.includes('WORK · 13'));
if(work13){
  work13.classList.remove('placeholder');
  work13.innerHTML='<div class="eyebrow">WORK · 13</div><h2>쇼콜라와 보는 오존도</h2><p>서울에서 외출 전 대기질을 확인하려는 사람이 기온만으로 오존을 판단하지 않도록, 2025년 서울 91일 연구 결과를 이용해 기온 구간과 실제 관측 사례를 보여주는 앱입니다.</p><div class="links"><a class="mini" href="https://yelim11.github.io/SKT_ALEPH_ozone-heart/" target="_blank" rel="noopener">앱 열기</a><a class="mini" href="https://github.com/yelim11/SKT_ALEPH_ozone-heart" target="_blank" rel="noopener">소스 보기</a></div>';
}
const worksHead=document.querySelector('#works .group-head p');
if(worksHead) worksHead.textContent='과제 10 논문과 그 결과를 실제로 사용하는 과제 13 앱을 대표작으로 연결했습니다.';
