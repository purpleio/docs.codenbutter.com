import{_ as s,o as n,c as a,a as t}from"./app.d789413f.js";const o=JSON.parse('{"title":"관리자 페이지 연동","description":"","frontmatter":{"head":[["meta",{"property":"og:url","content":"https://docs.codenbutter.com/developer/admin-embedded.html"}],["meta",{"name":"twitter:url","content":"https://docs.codenbutter.com/developer/admin-embedded.html"}],["meta",{"property":"og:description","content":"관리자 페이지 연동"}],["meta",{"name":"twitter:description","content":"관리자 페이지 연동"}]]},"headers":[{"level":2,"title":"연동방식","slug":"연동방식","link":"#연동방식","children":[]}],"relativePath":"developer/admin-embedded.md","lastUpdated":1704167794000}'),e={name:"developer/admin-embedded.md"},p=[t('<h1 id="관리자-페이지-연동" tabindex="-1">관리자 페이지 연동 <a class="header-anchor" href="#관리자-페이지-연동" aria-hidden="true">#</a></h1><p>코드앤버터의 관리자 화면을 현재 사용중인 고객님의 관리자 페이지에 iframe으로 연동하고 자동 로그인 처리를 할 수 있습니다.</p><nav class="table-of-contents"><ul><li><a href="#연동방식">연동방식</a></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>관리자 페이지 연동 기능은 현재 요청한 고객분께 별도로 키를 안내해 드리고 있습니다. 해당 기능이 필요하시면 <code>support@codenbutter.com</code>으로 문의해 주세요.</p></div><h2 id="연동방식" tabindex="-1">연동방식 <a class="header-anchor" href="#연동방식" aria-hidden="true">#</a></h2><p>관리자 페이지 연동이 필요한 경우 다음 token을 생성하고 다음 URL을 호출합니다.</p><p><strong>기본 경로</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">https://embed.codenbutter.com/v2/login/external</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>필수 파라미터</strong></p><table><thead><tr><th>속성</th><th>타입</th><th>설명</th></tr></thead><tbody><tr><td>organizationId</td><td>string</td><td>팀 아이디</td></tr><tr><td>siteId</td><td>string</td><td>사이트 아이디</td></tr><tr><td>language</td><td>&#39;ko&#39; | &#39;en&#39;</td><td>한글(&#39;ko&#39;) 또는 영문(&#39;en&#39;)</td></tr><tr><td>token</td><td>string</td><td>인증 토큰</td></tr></tbody></table><p><strong>인증 토큰 만들기</strong></p><p>인증 토큰은 JWT 기반으로 만들어집니다.</p><p>header</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">alg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">HS256</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">typ</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">JWT</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>payload</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">organizationId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">팀 아이디</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">exp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">현재 시간 + 1분 timestamp(sec)</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>',16)];const l=s(e,[["render",function(s,t,o,e,l,r){return n(),a("div",null,p)}]]);export{o as __pageData,l as default};