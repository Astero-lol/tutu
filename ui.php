<!DOCTYPE html>
<html lang="ru">
<? include('includes/template/head.inc'); ?>
<body>

<!-- Page -->
<div class="page" id="root">
	<ul class="ui-block">
		<h3 class="ui-block__head">Рейтинг</h3>
		<li class="ui-block__item">
			<ul class="rating">
				<li class="rating__item">&#9733;</li>
				<li class="rating__item">&#9733;</li>
				<li class="rating__item">&#9733;</li>
				<li class="rating__item">&#9733;</li>
				<li class="rating__item">&#9733;</li>
			</ul>
		</li>
	</ul>
	<ul class="ui-block">
		<h3 class="ui-block__head">Рейтинг (кроссбраузерный, но с картинкой)</h3>
		<li class="ui-block__item">
			<ul class="rating-two">
				<li class="rating-two__item"></li>
				<li class="rating-two__item"></li>
				<li class="rating-two__item rating-two__item_active"></li>
				<li class="rating-two__item"></li>
				<li class="rating-two__item"></li>
			</ul>
		</li>
	</ul>
	<ul class="ui-block">
		<h3 class="ui-block__head">Прогресс-бар</h3>
		<li class="ui-block__item">
			<div class="progress-bar">
				<span class="progress-bar__value">20%</span>
				<div class="progress-bar__line"></div>
			</div>
		</li>
	</ul>
	<ul class="ui-block">
		<h3 class="ui-block__head">Кнопки</h3>
		<li class="ui-block__item">
			<p class="ui-block__desc">Link</p>
			<a href="#" class="button">Кнопка</a>
		</li>
		<li class="ui-block__item">
			<p class="ui-block__desc">Input</p>
			<input type="button" class="button" value="Кнопка" />
		</li>
		<li class="ui-block__item">
			<p class="ui-block__desc">Button</p>
			<button class="button">Кнопка</button>
		</li>
		<li class="ui-block__item">
			<p class="ui-block__desc">Small</p>
			<div class="button button_small">Кнопка</div>
		</li>
		<li class="ui-block__item">
			<p class="ui-block__desc">Big</p>
			<div class="button button_big">Кнопка</div>
		</li>
	</ul>
</div>
<!--/Page -->

<!-- JS -->
<? include('includes/template/scripts.inc'); ?>
<!--/JS -->

</body>
</html>