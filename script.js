        const issuesData = [
            // 기술 및 장비 (6)
            { no: 2, date: '04-29 (화)', category: '기술 및 장비', cause: 'SDI 매립 케이블 부족', background: "초기 요청(테이블당 8개)보다 실제 필요 수량(9개)이 많았고, 버블용 예비 라인(2개)도 필요했습니다.", solution: '메인 스테이지 트러스에 신속하게 SDI 케이블을 추가 설치하여 해결했습니다.', duration: '1일', reviewers: { aiden: { opinion: '사전에 필요한 라인의 수와 배치도를 더욱 정교하게 확정해야 실수가 없습니다.', resolvedDate: '05/01' } } },
            { no: 3, date: '04-30 (수)', category: '기술 및 장비', cause: '무선 송수신기 연결 불안정', background: '수신기들을 너무 가까운 거리에 배치하여 상호 주파수 혼선이 발생했습니다.', solution: '수신기를 천장 트러스로 재배치하여 물리적 거리를 확보하고 혼선 문제를 해결했습니다.', duration: '2일', reviewers: { kai: { opinion: '금속 구조물과의 접점도 혼선 가능성이 높습니다. 향후 해외 출장 시 현지 주파수 대역폭에 맞는 해결책을 미리 준비해야 합니다.', resolvedDate: '05/01' } } },
            { no: 4, date: '05-01 (목)', category: '기술 및 장비', cause: 'FR7 카메라 IP 충돌', background: "폐쇄망에 연결된 다수 장비의 '유동 IP'가 FR7 카메라의 '고정 IP'와 충돌하여 제어 불능 상태가 되었습니다.", solution: '모든 유동 IP 장비 연결을 비활성화 한 후, FR7을 먼저 인식시키고 다른 장비들을 다시 활성화하는 순서로 해결했습니다.', duration: '1일', reviewers: {} },
            { no: 7, date: '05-03 (토)', category: '기술 및 장비', cause: 'RFID 그래픽 오류', background: '카라펫 측의 RFID 그래픽 설정 오류로 보드캠 전환 시 그래픽이 꺼지는 등 문제가 지속되었습니다.', solution: '카라펫 측에 지속적으로 요청하여 이틀에 걸쳐 모든 테이블의 그래픽 오류를 수정했습니다.', duration: '2일', reviewers: { trey: { opinion: '커뮤니케이션 전담자는 이슈가 해결될 때까지 책임지고 적극적으로 대응해야 합니다.', resolvedDate: '' } } },
            { no: 11, date: '05-07 (일)', category: '기술 및 장비', cause: '무선 카메라 \'NO LINK\' 화면 송출', background: '현장에서 예상치 못한 기술적 문제로 무선 카메라 연결이 끊겨 오류 화면이 그대로 송출되었습니다.', solution: '후반 작업을 위해 문제 발생 시점을 공유하는 프로세스를 시도했으나 실패했습니다. (개선 필요)', duration: '해결 실패', reviewers: { aiden: { opinion: '문제 발생 시점을 실시간으로 공유할 수 있는 명확한 프로세스(타임코드 기록 등)를 사전에 구축해야 합니다.', resolvedDate: ''} } },
            { no: 13, date: '05-11 (일)', category: '기술 및 장비', cause: '프리뷰 부재로 인한 포커스 문제', background: '송출 전 화면 포커스를 미리 확인할 방법이 없어, 간혹 포커스가 맞지 않는 화면이 송출되었습니다.', solution: "스위처 운용 단계에서 '프리뷰(Preview)' 기능을 추가하여, 포커스를 사전에 확인하고 수정할 수 있도록 시스템을 개선했습니다.", duration: '즉시 조치', reviewers: {} },
            // 물류 및 현장 세팅 (2)
            { no: 1, date: '04-29 (화)', category: '물류 및 현장 세팅', cause: '멀티뷰 모니터 스탠드 물류 지연', background: "'우리팀→카라펫→호텔'로 이어지는 다중 소통 구조로 인해 신속한 대응이 지연되었습니다.", solution: '지속적인 요청을 통해 최종 조달했습니다.', duration: '3일', reviewers: { aiden: { opinion: '호텔과 직접 소통할 수 있는 라인을 확보하여 중간 단계를 줄여야 합니다.', resolvedDate: '05/02' }, kai: { opinion: '향후 모든 테이블의 멀티뷰 모니터를 동일 모델로 통일하여 호환성 문제를 원천 차단해야 합니다.', resolvedDate: ''} } },
            { no: 5, date: '05-01 (목)', category: '물류 및 현장 세팅', cause: '테이블 띠 조명 세팅 지연', background: '조명 밝기가 계속 변경되어, 카메라 톤앤매너를 반복해서 다시 세팅해야 하는 비효율이 발생했습니다.', solution: "조명팀과 협의하여 조명값을 '25'로 최종 고정하고, 이를 기준으로 카메라 세팅을 완료했습니다.", duration: '4일', reviewers: { matthew: { opinion: '카메라와 조명은 하나의 팀처럼 움직여야 합니다. 세팅 전 반드시 기준값을 상호 합의해야 합니다.', resolvedDate: '05/05' } } },
            // 프로세스 및 커뮤니케이션 (3)
            { no: 6, date: '05-02 (금)', category: '프로세스 및 커뮤니케이션', cause: '리허설 미진행', background: '리허설에 필요한 엑스트라 인력 섭외에 실패하여, 중요했던 리허설이 진행되지 못했습니다.', solution: 'D-1(대회 전날) 오전에 별도의 리허설 시간을 급히 마련하여 진행했습니다.', duration: '2일', reviewers: { aiden: { opinion: '리스크를 줄이기 위해 차라리 대회 첫날 오전까지를 리허설 일정으로 잡는 것이 좋습니다.', resolvedDate: '' }, trey: { opinion: '리허설은 어떤 상황에서도 필수이며, 한국 스태프의 사전 피드백이 반드시 반영되어야 합니다.', resolvedDate: ''} } },
            { no: 8, date: '05-03 (토)', category: '프로세스 및 커뮤니케이션', cause: '외주팀(카라펫)과의 톤앤매너 불일치', background: '사용하는 카메라 기종 및 렌즈 등 장비 차이로 인해 양측 방송 화면의 색감과 질감에 이질감이 발생했습니다.', solution: '방송 종료 후 매일 LUT(색 보정값) 재매칭 및 카메라 무빙 가이드를 배포하는 등 대회 기간 내내 지속적인 보정 작업을 진행했습니다.', duration: '8일', reviewers: { aiden: { opinion: '프리 프로덕션 단계에서 양측 장비를 가져와 톤앤매너를 통일하는 작업을 반드시 거쳐야 합니다.', resolvedDate: '05/11' } } },
            { no: 12, date: '05-08 (목)', category: '프로세스 및 커뮤니케이션', cause: '포스트(후반)팀과의 소통 문제', background: '승자 컷을 너무 짧게 촬영하여, 후반 작업 시 편집점을 잡기 어렵고 화면이 튀는 문제가 발생했습니다.', solution: "모든 핸드가 끝나는 장면에서 인물 샷을 의도적으로 20초 이상 길게 촬영하도록 규정을 변경했습니다.", duration: '1일', reviewers: {} },
            // 연출 (2)
            { no: 9, date: '05-03 (토)', category: '연출', cause: '과한 카메라 줌인 및 무빙', background: '방송의 전체적인 톤과 맞지 않는 줌인과 무빙을 남발하여 시청 흐름을 방해했습니다.', solution: "'의미 있는 상황/인물/플레이'일 때만 줌인/무빙을 사용하도록 연출 가이드를 구체화했습니다.", duration: '3일', reviewers: { aiden: { opinion: '연출 가이드 변경 시, 후반팀(포스트)과의 소통 라인을 정비하여 편집 방향과 일치시킬 필요가 있습니다.', resolvedDate: '05/05' } } },
            { no: 10, date: '05-03 (토)', category: '연출', cause: '분할 화면 컷 구성 문제', background: '한 명의 FR7 감독이 2개의 분할 화면을 동시에 구성하다 보니, 중요한 피사체를 놓치는 실수가 발생했습니다.', solution: '역할을 분담하여, 한 화면은 FR7 감독이 다른 한 화면은 프리카메라 감독이 각각 책임지고 구성하도록 변경했습니다.', duration: '2일', reviewers: { matthew: { opinion: '중요한 연출은 1인에게 과부하를 주기보다, 명확한 역할 분담이 훨씬 안정적입니다.', resolvedDate: '05/04' } } },
        ];
        
        // --- 데이터 전처리 ---
        issuesData.forEach(issue => {
            const dateParts = issue.date.match(/(\d{2})-(\d{2})/);
            if (dateParts) {
                const month = dateParts[1];
                const day = dateParts[2];
                issue.isoDate = `2025-${month}-${day}`;
            }
        });

        const issuesByDate = issuesData.reduce((acc, issue) => {
            if (issue.isoDate) {
                if (!acc[issue.isoDate]) acc[issue.isoDate] = [];
                acc[issue.isoDate].push(issue);
            }
            return acc;
        }, {});

        // --- 전역 변수 ---
        const issuesGrid = document.getElementById('issues-grid');
        const filterContainer = document.getElementById('filter-container');
        const calendarWrapper = document.getElementById('calendar-wrapper');
        let currentFilter = { type: 'category', value: 'all' };

        // --- 스타일 및 템플릿 ---
        const categoryStyles = {
            '기술 및 장비': { tag: 'tag-tech', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mr-2 text-blue-400"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>` },
            '물류 및 현장 세팅': { tag: 'tag-logistics', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mr-2 text-orange-400"><path d="M14 16.5V13a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3.5"/><path d="M20 12V6H4v6"/><path d="M2 12h20"/><path d="M20 16.5a3.5 3.5 0 0 1-7 0"/><path d="M4 16.5a3.5 3.5 0 0 0 7 0"/></svg>` },
            '프로세스 및 커뮤니케이션': { tag: 'tag-process', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mr-2 text-green-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
            '연출': { tag: 'tag-directing', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mr-2 text-purple-400"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>` },
        };
        const createReviewerHTML = (name, data) => {
            if (!data || !data.opinion) return '';
            return `<div class="mt-3 pt-3 border-t border-gray-700"><p class="font-semibold text-sm text-sky-300">${name}</p><p class="text-sm text-gray-300 italic">"${data.opinion}"</p>${data.resolvedDate ? `<p class="text-xs text-right text-gray-500 mt-1">해결 확인: ${data.resolvedDate}</p>` : ''}</div>`;
        }

        // --- 렌더링 함수 ---
        const renderIssues = () => {
            issuesGrid.innerHTML = '';
            let filteredData;

            if (currentFilter.type === 'category') {
                filteredData = currentFilter.value === 'all' ? issuesData : issuesData.filter(issue => issue.category === currentFilter.value);
            } else if (currentFilter.type === 'date') {
                filteredData = issuesData.filter(issue => issue.isoDate === currentFilter.value);
            }

            filteredData.forEach(issue => {
                const style = categoryStyles[issue.category];
                const card = document.createElement('div');
                card.className = 'card rounded-xl overflow-hidden';
                card.setAttribute('data-category', issue.category);

                let reviewersHTML = '';
                if (issue.reviewers) {
                    reviewersHTML += createReviewerHTML('Aiden Kim', issue.reviewers.aiden);
                    reviewersHTML += createReviewerHTML('Matthew Kim', issue.reviewers.matthew);
                    reviewersHTML += createReviewerHTML('Kai Kim', issue.reviewers.kai);
                    reviewersHTML += createReviewerHTML('Trey Song', issue.reviewers.trey);
                }

                card.innerHTML = `<div class="p-6"><div class="flex items-center justify-between mb-4"><span class="tag ${style.tag}">${issue.category}</span><span class="text-xs font-mono text-gray-500">No. ${issue.no}</span></div><h3 class="text-xl font-bold text-gray-100 flex items-center mb-1">${style.icon} ${issue.cause}</h3><div class="flex items-center text-sm text-gray-400 mb-4"><span>발생: ${issue.date}</span><span class="mx-2">|</span><span>소요: ${issue.duration}</span></div><div class="mb-4"><p class="font-semibold text-sm text-gray-500 mb-1">문제 상황</p><p class="text-gray-300 text-sm leading-relaxed">${issue.background}</p></div><div><p class="font-semibold text-sm text-gray-500 mb-1">해결 조치</p><p class="text-sky-300 text-sm leading-relaxed">${issue.solution}</p></div></div>${reviewersHTML ? `<div class="border-t border-gray-700"><button class="details-toggle w-full text-left p-4 text-sm font-semibold text-gray-400 hover:bg-gray-700/50 flex justify-between items-center"><span>리뷰어 코멘트 보기</span><svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div class="details-content bg-gray-800">${reviewersHTML}</div></div>` : ''}`;
                issuesGrid.appendChild(card);
            });
        };
        
        const renderCalendar = (year, month) => { // month is 0-indexed
            const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
            const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];
            
            const firstDay = new Date(year, month, 1);
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            let startingDay = firstDay.getDay(); 
            startingDay = startingDay === 0 ? 6 : startingDay - 1;

            const calendarContainer = document.createElement('div');
            calendarContainer.className = 'bg-gray-800 p-4 rounded-lg';
            
            let html = `<div class="text-center font-bold text-lg mb-4">${year}년 ${monthNames[month]}</div>`;
            html += `<div class="grid grid-cols-7 gap-1 text-center text-xs text-gray-400 mb-2">`;
            daysOfWeek.forEach(day => { html += `<div>${day}</div>`; });
            html += `</div>`;
            
            html += `<div class="grid grid-cols-7 gap-1 text-center text-sm">`;
            for (let i = 0; i < startingDay; i++) { html += `<div></div>`; }

            for (let day = 1; day <= daysInMonth; day++) {
                const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const issuesOnDay = issuesByDate[dateStr];
                const isSelected = currentFilter.type === 'date' && currentFilter.value === dateStr;
                let dayClasses = 'calendar-day h-12 flex items-center justify-center';
                if(issuesOnDay) dayClasses += ' has-issue';
                if(isSelected) dayClasses += ' selected';
                
                let tooltipHTML = '';
                if(issuesOnDay) {
                    tooltipHTML += '<div class="calendar-tooltip"><ul>';
                    issuesOnDay.forEach(issue => {
                        tooltipHTML += `<li>${issue.cause}</li>`;
                    });
                    tooltipHTML += '</ul></div>';
                }

                html += `<div class="${dayClasses}" data-date="${dateStr}">
                            <span class="z-10">${day}</span>
                            ${issuesOnDay ? `<span class="issue-badge">${issuesOnDay.length}</span>` : ''}
                            ${tooltipHTML}
                         </div>`;
            }
            html += `</div>`;
            calendarContainer.innerHTML = html;
            calendarWrapper.appendChild(calendarContainer);
        };
        
        // --- UI 업데이트 및 이벤트 리스너 ---
        const updateUI = () => {
            // Calendar
            document.querySelectorAll('.calendar-day').forEach(day => {
                day.classList.remove('selected');
                if (currentFilter.type === 'date' && day.dataset.date === currentFilter.value) {
                    day.classList.add('selected');
                }
            });
            // Filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                 btn.classList.remove('active');
                 const isCategoryMatch = currentFilter.type === 'category' && btn.dataset.filter === currentFilter.value;
                 const isAllReset = currentFilter.type === 'date' && btn.dataset.filter === 'all';
                 if (isCategoryMatch) {
                    btn.classList.add('active');
                 }
            });
            // If no category button is active (because a date is selected), activate 'all'
            if (!document.querySelector('.filter-btn.active')) {
                document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
            }
            
            renderIssues();
        };

        filterContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                currentFilter = { type: 'category', value: e.target.dataset.filter };
                updateUI();
            }
        });

        issuesGrid.addEventListener('click', (e) => {
            const toggleButton = e.target.closest('.details-toggle');
            if (toggleButton) {
                const content = toggleButton.nextElementSibling;
                const icon = toggleButton.querySelector('svg');
                content.classList.toggle('open');
                icon.style.transform = content.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });

        calendarWrapper.addEventListener('click', e => {
            const dayElement = e.target.closest('.calendar-day.has-issue');
            if(dayElement) {
                const date = dayElement.dataset.date;
                if(currentFilter.type === 'date' && currentFilter.value === date) {
                    currentFilter = { type: 'category', value: 'all' };
                } else {
                    currentFilter = { type: 'date', value: date };
                }
                updateUI();
            }
        });

        // --- 초기 렌더링 ---
        renderCalendar(2025, 3); // April
        renderCalendar(2025, 4); // May
        updateUI();

// 테마 토글
const themeToggle = document.getElementById("theme-toggle");
if(themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light");
        themeToggle.textContent = document.body.classList.contains("light") ? "다크 모드" : "라이트 모드";
    });
}

