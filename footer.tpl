
<style>
.footer{margin-top:0!important}
.pdp-hero:not(:first-child) .hero-content-box.right-align .hero-title-box h1{width: 550px; margin-left: -150px;}
.pdp-hero:not(:first-child) .hero-content-box.left-align .hero-title-box h1{width: 550px;}
</style>
<footer class="footer">
    <div class="container">

		<div class="row">
			<div class="col-xs-12 col-md-4 col-sm-4">
				<p class="left">НОРД-АВТО - официальный дилер VOLVO<br>Сертифицированный сервисный центр<br>170032, ТВЕРЬ, МОСКОВСКОЕ ШОССЕ, 11 КОРПУС 1</p>
			</div>
			<div class="col-xs-12 col-md-4 col-sm-4">
					<div class="footer-socials">
                            <a rel="publisher" target="_blank" href="https://vk.com/volvo_nordavto">
                                <i class="icon fa-2x fa-vk"></i>
                            </a>
                            <a rel="publisher" target="_blank" href="https://www.facebook.com/volnordavto/">
                                <i class="icon fa-2x fa-facebook-official"></i>
                            </a>
                            <a rel="publisher" target="_blank" href="#">
                                <i class="icon fa-2x fa-youtube-square"></i>
                            </a>
                            <a rel="publisher" target="_blank" href="https://www.instagram.com/volvo_nordavto_tver/">
                                <i class="icon fa-2x fa-instagram"></i>
                            </a>
                    </div>
			</div>
			<div class="col-xs-12 col-md-4 col-sm-4">
				<p class="right"><span class="footer_phone">+ 7 4822 777 902</span><br>ЕЖЕДНЕВНО С 8:00 ДО 20:00</p>
			</div>
		</div>
        <div class="footer-row">
			<a href="/"><img class="footer-logo" src="/Static/images/logos/volvo_wordmark_white.png" alt="" /></a>
            <div class="center"><small>&#169; <span id="copyright-year">2016</span></small></div>
            <p class="footer-scroll"><a class="button button-small button-light js-scroll-top" href="#">Наверх</a></p>
        </div>
    </div>
</footer>
            <div id="mask"></div>
        </div>
<!--[if gt IE 8]><!-->
    <script src="/Static/scripts/jquery-2.1.1.min.js"></script>
<!--<![endif]-->
<!--[if gt IE 9]><!-->
    <script src="/Static/scripts/vendor2851.js?v=1.8.0.15595"></script>
<!--<![endif]-->

<!--[if lte IE 8]>
    <script src="/Static/scripts/jquery-1.11.1.min.js"></script>
<![endif]-->
<!--[if lte IE 9]>
    <script src="/Static/scripts/vendor-legacy.js?v=1.8.0.15595"></script>
<![endif]-->

<!--[if !IE]><!-->

<!--<![endif]-->
		<script src='/Static/scripts/main.js'>

		</script>
	<script>var jQ = jQuery;</script>
	<script src="data/js2851.js?v=1.8.0.15595"></script>
	<script src="/Static/scripts/app.min2851.js?v=1.8.0.15595"></script>
	<script src="/Static/scripts/custom.js"></script>
	<script src="/Static/scripts/jquery.colorbox-min.js"></script>
	<script>
		$(document).ready(function(){
			$(".inline").colorbox({inline:true, innerWidth:640, innerHeight:350,
				title: 'Нажав кнопку «Отправить», я даю согласие на обработку моих персональных данных и получение рекламы. С условиями обработки персональных данных и получения рекламы, изложенными на сайте volnordavto.ru (Согласие на обработку персональных данных и получение рекламы) — ознакомлен и согласен.',
				onOpen:function(){
					$('#request-type').val( $(this).attr('title') );
					$('#window_title').text( $(this).attr('title') );
				}
			});
		});
	</script>
	<div style='display:none'>
		<div id='popup_window' style='padding:10px; background:#fff;'>
			<form id="contact" class='rd-mailform form-subscribe' method="post" action="bat/rd-mailform.php">
				<fieldset>
					<input type="hidden" name="form-type" value="contact"/>
					<input type="hidden" id="request-type" name="request-type" value=""/>
					<div id="window_title"></div>

					<div class="popup-universal-block_new">
					<label>Ваше имя
						<input type="text" name="name" data-constraints="@NotEmpty">
					</label>
					<label>Ваш телефон
						<input type="text" name="phone" data-constraints="@NotEmpty @Phone">
					</label>
					<label>Ваш e-mail
						<input type="text" name="email" data-constraints="@NotEmpty @Email">
					</label>
					<label class="white">Отправить
						<div class="right">
							<a rel="submit" href="#" onclick="$('#contact').submit(); setTimeout('jQuery.colorbox.close();', 3000); return false;">Отправить <i class="icon fa fa-2x fa-paper-plane"></i></a>
						</div>
					</label>
					</div>
				</fieldset>
				<div class="mfInfo"></div>
			</form>
		</div>
	</div>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-83137462-1', 'auto');
  ga('send', 'pageview');
</script>
<!-- Yandex.Metrika counter --> <script type="text/javascript"> (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter39249800 = new Ya.Metrika({ id:39249800, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/39249800" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
</body>
</html>
