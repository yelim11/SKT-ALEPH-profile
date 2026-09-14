const items=document.querySelectorAll('.reveal');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');observer.unobserve(entry.target)}})},{threshold:.1,rootMargin:'0px 0px -4% 0px'});items.forEach(item=>observer.observe(item));

// BR-B 대표작 연결
const worksIntro=document.querySelector('#works .group-head p');
if(worksIntro){worksIntro.textContent='과제 10 논문의 결과와, 그 결과를 실제 판단 과정으로 바꾼 BR-B 애플리케이션을 나란히 정리했습니다.';}
const appCard=document.querySelector('#works .work-card.placeholder');
if(appCard){
  appCard.classList.remove('placeholder');
  appCard.innerHTML='<div class="eyebrow">WORK · BR-B</div><h2>O₃ CHECK · 기온만으로 오존을 추측하지 않기</h2><p>2025년 4~6월 서울 91일 분석에서 전체 Pearson r=-0.0697, p=0.5115로 단순한 양의 관계가 확인되지 않은 결과를 앱의 규칙으로 사용했습니다. 기온을 오존의 대리값으로 쓰지 않고 실제 오존 농도를 따로 확인하도록 돕습니다.</p><div class="links"><a class="mini" href="ozone-check/">앱 사용하기</a></div>';
}