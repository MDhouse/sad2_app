<div class="card-content">
											<span class="card-title">Rozwiązanie</span>
											<hr />
											<p class="contents">
												Obliczenie momentu zwykłego i centralnego zmiennej losowej jest prosta czynnością. 
												Również w tym przypadku obliczyć trzeba całkę, a wykorzystując środowisko R wykonujemy
												przy pomocy funkcji $$integrate$$.<br/>
												Poniżej zaprezebtowany zostanie kod, który obliczy momenty cenrtalny i zwykły. 
											</p>
											<span class="titleDefinition">Moment zwykły</span><br/>
											<div class="sourceCode">
												$$f1 = function(x) \ \ (x*c*f(x))$$<br/>
												$$f2 = function(x) \ \ (x^2*c*f(x))$$<br/>
												$$f3 = function(x) \ \ (x^3*c*f(x))$$<br/>
												$$f4 = function(x) \ \ (x^4*c*f(x))$$<br/>
												$$m1 = as.numeric((integrate(f1,0,1)[1]))$$<br/>
												$$m2 = as.numeric((integrate(f2,0,1)[1]))$$<br/>
												$$m3 = as.numeric((integrate(f3,0,1)[1]))$$<br/>
												$$m4 = as.numeric((integrate(f4,0,1)[1]))$$<br/>
											</div>
											<span class="titleDefinition">Moment centralny</span><br/>
											<div class="sourceCode">
												$$g2 = function(x) \ \ ((x-m1)^2*c*f(x))$$<br/>
												$$g3 = function(x) \ \ ((x-m1)^3*c*f(x))$$<br/>
												$$g4 = function(x) \ \ ((x-m1)^4*c*f(x))$$<br/>
												$$u2 = as.numeric(integrate(g2, 0, 1)[1])$$<br/>
												$$u3 = as.numeric(integrate(g3, 0, 1)[1])$$<br/>
												$$u4 = as.numeric(integrate(g4, 0, 1)[1])$$<br/>
											</div>
											<p class="contents">
												Otrzymany wynik należy zaokrąglić do pięciu miejsc po przecinku.
											</p>

											 <table class="tableScore center sourceCode">
												<thead>
												 <tr style="text-transform= uppercase">
													<th data-field="id">Moment zwykły</th>
													<th data-field="name">L.P.</th>
													<th data-field="price">Moment zwykły</th>
												</tr>
												</thead>

												<tbody>
												<tr>
													<td>0.48848</td>
													<td>1</td>
													<td></td>
												</tr>
												<tr>
													<td>0.32184</td>
													<td>2</td>
													<td>0.08323</td>
												</tr>
												<tr>
													<td>0.23968</td>
													<td>3</td>
													<td>0.00115</td>
												</tr>
												<tr>
													<td>0.19083</td>
													<td>4</td>
													<td>0.01249</td>
												</tr>												
												</tbody>
											</table>
										</div>