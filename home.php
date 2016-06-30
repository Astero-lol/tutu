<!DOCTYPE html>
<html lang="ru">
<? include('includes/template/head.inc'); ?>
<body>

	<!-- Page -->
	<div class="page" id="root">

		<header class="header">
			<? include('includes/blocks/menu.inc'); ?>
			<div class="header-menu-button">
				<div class="header-menu-button__icon">
					<i class="header-menu-button__line header-menu-button__line_1"></i>
					<i class="header-menu-button__line header-menu-button__line_2"></i>
					<i class="header-menu-button__line header-menu-button__line_3"></i>
				</div>
			</div>
		</header>
		<? include('includes/blocks/mobile-menu.inc'); ?>

		<aside class="sidebar">
			<div class="sidebar__text text">
				<p>&#9728; TutuRu&nbsp;&mdash; крупнейший сервис поиска, бронирования и&nbsp;покупки авиабилетов и&nbsp;<nobr>ж/д</nobr>&nbsp;билетов.</p>
				<p>Наша цель проста&nbsp;&mdash; делать наших клиентов счастливыми, а&nbsp;их&nbsp;путешествия незабываемыми. Любое путешествие начинается с&nbsp;поиска подходящих билетов и&nbsp;бронирования гостиниц. А&nbsp;мы&nbsp;делаем это качественно, обеспечивая самую лучшую поддержку благодаря собственному <nobr>контакт-центру</nobr>.</p>
			</div>
		</aside>
		
		<section class="content">
			<div class="progress">
				<h3 class="progress__title title">Заполните форму</h3>
				<ul class="progress__list">
					<li class="progress__item progress__item_active">1</li>
					<li class="progress__item progress__item_active">2</li>
					<li class="progress__item progress__item_active">3</li>
					<li class="progress__item">4</li>
					<li class="progress__item">5</li>
				</ul>
			</div>
			<p class="content__line"><span class="content__line-title">Общая информация</span></p>
			<form action="/" class="form">
				<div class="form__wrapper">
					<div class="form__block">
						<label class="form__label">
							<p class="form__title">Фамилия</p>
							<input type="text" class="form__field">
						</label>
					</div>
					<div class="form__block">
						<label class="form__label">
							<p class="form__title">Имя</p>
							<input type="text" class="form__field">
						</label>
					</div>
					<div class="form__block">
						<label class="form__label">
							<p class="form__title">Отчество</p>
							<input type="text" class="form__field">
						</label>
					</div>
					<div class="form__block">
						<p class="form__title">Меняли фамилию?</p>
						<div class="switch">
							<input class="switch__input" type="radio" name="lname" id="yes" />
							<label class="switch__label" for="yes">Да</label>

							<input class="switch__input" type="radio" name="lname" id="no"  checked="checked"/>
							<label class="switch__label" for="no">Нет</label>
						</div>
					</div>
					<div class="form__block">
						<p class="form__title">Пол</p>
						<div class="switch">
							<input class="switch__input" type="radio" name="gender" id="man" />
							<label class="switch__label" for="man">Муж</label>
							<input class="switch__input" type="radio" name="gender" id="woman" checked />
							<label class="switch__label" for="woman">Жен</label>
						</div>
					</div>
					<div class="form__block">
						<p class="form__title">Семейное положение</p>
						<div class="form__info">
							<select name="/" class="select">
								<option value="1" selected>Женат / Замужем</option>
								<option value="2">Вариант 2</option>
								<option value="3">Вариант 3</option>
							</select>
						</div>
					</div>
					<div class="form__block">
						<p class="form__title">Гражданство</p>
						<div class="form__info">
							<select name="/" class="select">
								<option value="1" selected>Российская Федерация</option>
								<option value="2">Вариант 2</option>
								<option value="3">Вариант 3</option>
							</select>
						</div>
					</div>
					<div class="form__block">
						<p class="form__title">Семейное положение</p>
						<div class="form__info">
							<select name="/" class="select select_day">
								<option value="1" selected>1</option>
								<option value="2">2</option>
								<option value="3">3</option>
							</select>
							<select name="/" class="select select_mouth">
								<option value="1" selected>июня</option>
								<option value="2">июля</option>
								<option value="3">августа</option>
							</select>
							<select name="/" class="select select_year">
								<option value="1" selected>1970</option>
								<option value="2">1971</option>
								<option value="3">1972</option>
							</select>
						</div>
					</div>
				</div>
				<div class="form__block form__block_full">
					<label class="form__label">
						<p class="form__title">Место рождения</p>
						<input type="text" class="form__field">
						<p class="form__note">Например, Россия, Комсомольск-на-Амуре</p>
					</label>
				</div>
				<footer class="form__footer">
					<a href="home.php" class="button button_gray form__button-back">&#8592; Назад</a>
					<button type="submit" class="button button_green form__button-next">Далее &#8594;</button>
				</footer>
			</form>
		</section>

	</div>
	<!--/Page -->

	<!-- JS -->
	<? include('includes/template/scripts.inc'); ?>
	<!--/JS -->

</body>
</html>