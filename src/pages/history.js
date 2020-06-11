import React from "react";
import { Container, Content, Title, Notification } from "bloomer";

import Layout from "./../layouts/Layout";

const History = ({ location }) => (
	<Layout location={location} >
		<Container>
			<Content>
				<Title>Історія технікуму</Title>
				<Notification isColor="white">
					Київський авіаційний технікум утворений згідно наказу Міністерства
					авіаційної промисловості СРСР від 03.10.1966 р. № 566 для підготовки
					фахівців для авіаційної промисловості.
				</Notification>

				<Notification isColor="info">
					Технікум заснований на <i>державній формі</i> власності.
				</Notification>

				<Notification isColor="white">
					Підготовка спеціалістів з дня заснування технікуму велася за фахом 0511
					«Літакобудування».
				</Notification>

				<Notification isColor="info">
					Відповідно до «Основних напрямків перебудови вищої і середньої
					спеціальної освіти в країні» на підставі наказу № 810 від 27.11.1987 р.
					про новий перелік спеціальностей з 1989 р. навчання ведеться за фахом
					5.10010101 «Виробництво авіаційних суден» та за фахом «Економіка
					підприємства».
				</Notification>

				<Notification isColor="white">
					Відповідно до Указу Президії Верховної Ради України від 30.08.1991 р.
					«Про передання підприємств, установ та організацій союзного
					підпорядкування, розташованих на території України у державну власність»
					та дорученням Кабінету Міністрів України від 20.09.1991 р. №18602/18
					Київський авіаційний технікум був переданий з 01.10.1991 р. у
					підпорядкування Міністерству освіти України.
				</Notification>
			</Content>
		</Container>
	</Layout>
);

export default History;
