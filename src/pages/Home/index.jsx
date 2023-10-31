import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

const Home = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const clients = [
		{
			clientImg: "/assets/images/people-1.png",
			clientHeading: "Quick, easy & reliable",
			clientDetail:
				"Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.",
			clientName: "Jenna Johnson",
		},
		{
			clientImg: "/assets/images/people-2.png",
			clientHeading: "The best clinic in town",
			clientDetail:
				"Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.",
			clientName: "Robert Logan",
		},
		{
			clientImg: "/assets/images/people-3.png",
			clientHeading: "The true professionals",
			clientDetail:
				"Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.",
			clientName: "August Johns",
		},
		{
			clientImg: "/assets/images/people-1.png",
			clientHeading: "Quick, easy & reliable",
			clientDetail:
				"Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.",
			clientName: "Jenna Johnson",
		},
		{
			clientImg: "/assets/images/people-2.png",
			clientHeading: "The best clinic in town",
			clientDetail:
				"Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.",
			clientName: "Robert Logan",
		},
		{
			clientImg: "/assets/images/people-3.png",
			clientHeading: "The true professionals",
			clientDetail:
				"Duis sed odio sit amet nibh vulputate cursus a sit am mauris. Morbi accumsan sum ipsum velit. Nam nec tellus am od tincidunt auctor.",
			clientName: "August Johns",
		},
	];
	const homeNav = () => {
		if (document.body.classList.contains("home-sm")) {
			document.body.classList.remove("home-sm");
		} else {
			document.body.classList.add("home-sm");
		}
	};
	return (
		<>
			{/*top-nav  */}
			<button type="button" onClick={handleShow} className="chat-btn">
				<img src="/assets/images/chat.svg" alt="chat" />
				<div className="fw-700 fs-14 text-white">Chat</div>
			</button>
			<div className="top-header d-none d-md-block">
				<div className="container">
					<div className="d-flex justify-content-between align-items-center text-white fs-14">
						<div className="fs-12 text-white">Mon - Sat 8:00 17:30, Sunday - CLOSED</div>
						<div className="d-flex gap-5">
							<div className="d-flex align-items-center gap-2">
								<span className="iconify" data-icon="ph:phone"></span>
								<div className="fs-16">+654/4715-167</div>
							</div>
							<div className="fs-20">.</div>
							<div className="d-flex align-items-center gap-2">
								<div className="fs-16">allsmiles@qodeinteractive.com</div>
							</div>
							<div className="fs-14">.</div>
							<div className="d-flex align-items-center gap-2">
								<span className="iconify" data-icon="carbon:location"></span>
								<div className="fs-16">63 Wall St, New York, NY 10005</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Navbar expand="lg" className="bg-body-tertiary">
				<div className="container">
					<Navbar.Brand href="#home">
						<img src="/assets/images/logo.svg" alt="logo" />
					</Navbar.Brand>
					<a
						href="javascript:void(0)"
						className="blue-text fs-20 d-lg-none d-block"
						onClick={() => {
							homeNav();
						}}>
						<span className="iconify" data-icon="humbleicons:bars"></span>
					</a>
					<Navbar.Collapse id="basic-navbar-nav">
						<div className="d-lg-none d-flex align-content-center justify-content-between mb-5">
							<div className="nav-sm-img">
								<img src="/assets/images/logo.svg" alt="" />
							</div>
							<a
								href="javascript:void(0)"
								className="blue-text fs-20"
								onClick={() => {
									homeNav();
								}}>
								<span className="iconify" data-icon="gridicons:cross"></span>
							</a>
						</div>
						<Nav className="mx-auto gap-4">
							<Nav.Link href="#home" className="active">
								Home
							</Nav.Link>
							<Nav.Link as={NavLink} to="/dashboard">
								Pages
							</Nav.Link>
							<Nav.Link href="#services">Staff</Nav.Link>
							<Nav.Link href="#resume">Blog</Nav.Link>
							<Nav.Link href="#portfolio">Shop</Nav.Link>
							<Nav.Link href="#contact">Landing</Nav.Link>
						</Nav>
						<div className="d-flex align-items-center gap-4 d-none d-lg-flex">
							<a href="javascript:void(0)" className="nav-search">
								search
							</a>
							<div className="nav-burger">
								<span className="iconify" data-icon="iconamoon:menu-burger-horizontal-thin"></span>
							</div>
						</div>
					</Navbar.Collapse>
				</div>
			</Navbar>

			{/* provide */}
			<section className="provide">
				<Carousel>
					<Carousel.Item>
						<img src="/assets/images/provide-main.png" />
						<Carousel.Caption>
							<div className="dental-text">dental practice</div>
							<div className="d-block mt-2">
								<div className="provide-text">We provide the best</div>
							</div>
							<div className="d-block mt-3">
								<div className="provide-text">services out there</div>
							</div>
							<div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">
								<button type="button" className="view-btn">
									view more
								</button>
								<button type="button" className="purchase-btn">
									purchase
								</button>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img src="/assets/images/provide-main.png" />
						<Carousel.Caption>
							<div className="dental-text">dental practice</div>
							<div className="d-block mt-2">
								<div className="provide-text">We provide the best</div>
							</div>
							<div className="d-block mt-3">
								<div className="provide-text">services out there</div>
							</div>
							<div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">
								<button type="button" className="view-btn">
									view more
								</button>
								<button type="button" className="purchase-btn">
									purchase
								</button>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img src="/assets/images/provide-main.png" />
						<Carousel.Caption>
							<div className="dental-text">dental practice</div>
							<div className="d-block mt-2">
								<div className="provide-text">We provide the best</div>
							</div>
							<div className="d-block mt-3">
								<div className="provide-text">services out there</div>
							</div>
							<div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">
								<button type="button" className="view-btn">
									view more
								</button>
								<button type="button" className="purchase-btn">
									purchase
								</button>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</section>

			{/* working-hours  */}
			<section className="working-hours">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="working-card">
								<div className="working-image">
									<img src="/assets/images/working-1.png" alt="working-image" />
								</div>
								<div>
									<h3 className="fs-26 fw-600 blue-text mt-4">Pick the dentist that fits all your needs the best</h3>
									<p className="gray-text fs-14 mt-4">
										Lorem ipsum dolor sit amet, eu duo ferri labor. Mea ex modo reque senserit, et sed hinc dolor,
										scaevola sum salutandi expetendis vix ne. Eros dicat his sum mel quod mundi consequat sum.
									</p>
									<a href="#" className="read-more open-font mt-4">
										read more
										<img src="/assets/images/read-more-btn.png" alt="read-more" />
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 mt-5 mt-md-0">
							<div className="working-card">
								<div className="working-image">
									<img src="/assets/images/working-2.png" alt="working-image" />
								</div>
								<div>
									<div className="d-flex align-items-center mt-4">
										<div className="plus-head">
											<img src="/assets/images/working-plus.png" alt="plus" />
										</div>
										<div className="gray-text open-font fs-14">Professional dental services 24/7</div>
									</div>
									<div className="d-flex align-items-center mt-2">
										<div className="plus-head">
											<img src="/assets/images/working-plus.png" alt="plus" />
										</div>
										<div className="gray-text open-font fs-14">Oral hygiene advisory & assessment</div>
									</div>
									<div className="d-flex align-items-center mt-2">
										<div className="plus-head">
											<img src="/assets/images/working-plus.png" alt="plus" />
										</div>
										<div className="gray-text open-font fs-14">Oral and maxillofacial surgery</div>
									</div>
									<div className="d-flex align-items-center mt-2">
										<div className="plus-head">
											<img src="/assets/images/working-plus.png" alt="plus" />
										</div>
										<div className="gray-text open-font fs-14">Dental public health insurance</div>
									</div>
									<div className="d-flex align-items-center mt-2">
										<div className="plus-head">
											<img src="/assets/images/working-plus.png" alt="plus" />
										</div>
										<div className="gray-text open-font fs-14">Free online appointment booking</div>
									</div>
									<div className="d-flex align-items-center mt-2">
										<div className="plus-head">
											<img src="/assets/images/working-plus.png" alt="plus" />
										</div>
										<div className="gray-text open-font fs-14">Various cosmetic dentistry services</div>
									</div>
									<div className="d-flex align-items-center mt-2">
										<div className="plus-head">
											<img src="/assets/images/working-plus.png" alt="plus" />
										</div>
										<div className="gray-text open-font fs-14">Special care dentistry services </div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mt-5 mt-md-0">
							<div>
								<div className="working-hours-card">
									<h2 className="fs-36 fw-600 blue-text text-center">Working Hours</h2>
									<div className="d-flex justify-content-between align-items-center mt-4">
										<div className="fs-12 light-gray-text fw-400 open-font">Monday</div>
										<div className="lines">
											<img src="/assets/images/hours-lines.png" alt="hours-line" />
										</div>
										<div className="fs-12 light-gray-text fw-400 open-font">8am-7pm</div>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<div className="fs-12 light-gray-text fw-400 open-font">Tuesday</div>
										<div className="lines">
											<img src="/assets/images/hours-lines.png" alt="hours-line" />
										</div>
										<div className="fs-12 light-gray-text fw-400 open-font">8am-7pm</div>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<div className="fs-12 light-gray-text fw-400 open-font">Wednesday</div>
										<div className="lines">
											<img src="/assets/images/hours-lines.png" alt="hours-line" />
										</div>
										<div className="fs-12 light-gray-text fw-400 open-font">8am-7pm</div>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<div className="fs-12 light-gray-text fw-400 open-font">Thursday</div>
										<div className="lines">
											<img src="/assets/images/hours-lines.png" alt="hours-line" />
										</div>
										<div className="fs-12 light-gray-text fw-400 open-font">8am-7pm</div>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<div className="fs-12 light-gray-text fw-400 open-font">Friday</div>
										<div className="lines">
											<img src="/assets/images/hours-lines.png" alt="hours-line" />
										</div>
										<div className="fs-12 light-gray-text fw-400 open-font">8am-7pm</div>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<div className="fs-12 light-gray-text fw-400 open-font">Saturday</div>
										<div className="lines">
											<img src="/assets/images/hours-lines.png" alt="hours-line" />
										</div>
										<div className="fs-12 light-gray-text fw-400 open-font">8am-7pm</div>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<div className="fs-12 light-gray-text fw-400 open-font">Sunday</div>
										<div className="lines">
											<img src="/assets/images/hours-lines.png" alt="hours-line" />
										</div>
										<div className="fs-12 light-gray-text fw-400 open-font">CLOSED</div>
									</div>
								</div>
								<a href="#" className="call-us-btn">
									Call Us: +354/759-1675
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* specialist */}
			<section className="specialist">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="d-flex align-items-center gap-4">
								<div className="specialist-image">
									<img src="/assets/images/special-1.svg" alt="special-1" />
								</div>
								<div>
									<h5 className="fs-20 blue-text fw-600">Root Canal Specialist</h5>
									<div className="open-font fs-14 gray-text">
										Vix nibh iudicabit necessitus et, quam inermis voluptatus.
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mt-4 mt-md-0">
							<div className="d-flex align-items-center gap-4">
								<div className="specialist-image">
									<img src="/assets/images/special-2.svg" alt="special-1" />
								</div>
								<div>
									<h5 className="fs-20 blue-text fw-600">Alignment Specialist</h5>
									<div className="open-font fs-14 gray-text">
										Vix nibh iudicabit necessitus et, quam inermis voluptatus.
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mt-4 mt-md-0">
							<div className="d-flex align-items-center gap-4">
								<div className="specialist-image">
									<img src="/assets/images/special-3.svg" alt="special-1" />
								</div>
								<div>
									<h5 className="fs-20 blue-text fw-600">Cosmetic Dentistry</h5>
									<div className="open-font fs-14 gray-text">
										Vix nibh iudicabit necessitus et, quam inermis voluptatus.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row mt-md-5 pt-md-5">
						<div className="col-md-4 mt-4 mt-md-0">
							<div className="d-flex align-items-center gap-4">
								<div className="specialist-image">
									<img src="/assets/images/specail-4.svg" alt="special-1" />
								</div>
								<div>
									<h5 className="fs-20 blue-text fw-600">Oral Hygiene Experts</h5>
									<div className="open-font fs-14 gray-text">
										Vix nibh iudicabit necessitus et, quam inermis voluptatus.
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mt-4 mt-md-0">
							<div className="d-flex align-items-center gap-4">
								<div className="specialist-image">
									<img src="/assets/images/special-5.svg" alt="special-1" />
								</div>
								<div>
									<h5 className="fs-20 blue-text fw-600">Live Dental Advisory</h5>
									<div className="open-font fs-14 gray-text">
										Vix nibh iudicabit necessitus et, quam inermis voluptatus.
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mt-4 mt-md-0">
							<div className="d-flex align-items-center gap-4">
								<div className="specialist-image">
									<img src="/assets/images/special-6.svg" alt="special-1" />
								</div>
								<div>
									<h5 className="fs-20 blue-text fw-600">Cavity Inspection</h5>
									<div className="open-font fs-14 gray-text">
										Vix nibh iudicabit necessitus et, quam inermis voluptatus.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* dedicated */}
			<div className="container-fluid px-0 my-5">
				<section className="dedicated">
					<div className="dedicated-text w-50">
						<div className="row justify-content-center align-items-center h-100 g-0">
							<div className="col-md-10 col-lg-7">
								<div className="fs-12 fw-600 red-text text-uppercase">dental practice</div>
								<h1 className="h-primary fs-42 mt-2">Fully dedicated to your dental health</h1>
								<p className="fs-14 light-gray-text open-font">
									Te veritus tractatos delicatissimi qui, justo diceret mentitum ut sit. Qui sed reque dicam, qui veri
									nullam vituperatoribus in. Tibique maiestatis sum quod sum ut alienum nec et, summo possim persequeris
									vix mea. Adhuc quodsi qui, sit no tale essent electram. Mei sum prodesset in pro, quo scripta feugait
									vidisse.
								</p>
								<div className="orange-text fw-600 mt-4">Andrea McCollins</div>
							</div>
						</div>
					</div>
					<div className="dedicated-video w-50">
						<img src="/assets/images/dedicate-video.png" alt="dedicate-video" />
					</div>
				</section>
			</div>

			{/* people */}
			<section className="people">
				<div className="container">
					<div className="text-center">
						<div className="fs-12 fw-600 red-text open-font text-uppercase">dental practice</div>
						<h1 className="h-primary mt-2">What People Say</h1>
						<p className="fs-18 gray-text open-font">
							In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis.
						</p>
					</div>
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							640: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className="mySwiper">
						{clients.map((item, index) => {
							return (
								<>
									<SwiperSlide>
										<div className="people-card">
											<div className="people-main mx-auto">
												<img src={item.clientImg} alt="people-1" />
												<div className="card-box">
													<img src="/assets/images/count-number.svg" alt="count" />
												</div>
											</div>
											<div className="h4 fs-26 blue-text fw-600 mt-4">{item.clientHeading}</div>
											<p className="gray-text fs-14 open-font">{item.clientDetail}</p>
											<div className="fs-12 red-text open-font fw-600 mt-4">{item.clientName}</div>
										</div>
									</SwiperSlide>
								</>
							);
						})}
					</Swiper>
				</div>
			</section>

			{/* discount */}
			<section className="discount">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-md-8">
							<div className="fs-34 fw-600 text-white">
								Discount dental plans save you
								<span className="red-text"> up to 60%</span>
							</div>
							<p className="fs-18 text-white">
								Sea te illum euismod, ex dicta noluisse qui, sea an hinc pericula imperdiet sum.
							</p>
						</div>
						<div className="col-md-3 align-self-center">
							<div className="d-flex justify-content-end">
								<a href="#" className="purchase-btn discount-btn">
									Learn more
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* professional*/}
			<section className="professional">
				<div className="container">
					<Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 active">
						<Tab eventKey="home" title="Root Canal Specialist">
							<div className="row justify-content-between">
								<div className="col-md-6">
									<h4 className="fs-36 fw-600 blue-text">Fast & professional treatments for every patient</h4>
									<p className="fs-20 text-gray">
										Proin gravida nibh vel velit auctor aliquet ent. Est vel sum sollicitudin, lorem ad quismi bibe nd
										mi auctor.
									</p>
									<p>
										Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi accumsan sed ipsum velit. Nam nec
										tellus a od tincidunt auctor a ornare odio. Alia ludus animal ius te, ea amet necessitatibus vix.
										Solum persius voluptaria ad nostro quis odio scriptorem ex vim.
									</p>
								</div>
								<div className="col-md-5">
									<div className="pro-images">
										<img src="/assets/images/profession-main.png" alt="" />
									</div>
								</div>
							</div>
						</Tab>
						<Tab eventKey="profile" title="Alignment Specialist">
							<div className="row justify-content-between">
								<div className="col-md-6">
									<h4 className="fs-36 fw-600 blue-text">Fast & professional treatments for every patient</h4>
									<p className="fs-20 text-gray">
										Proin gravida nibh vel velit auctor aliquet ent. Est vel sum sollicitudin, lorem ad quismi bibe nd
										mi auctor.
									</p>
									<p>
										Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi accumsan sed ipsum velit. Nam nec
										tellus a od tincidunt auctor a ornare odio. Alia ludus animal ius te, ea amet necessitatibus vix.
										Solum persius voluptaria ad nostro quis odio scriptorem ex vim.
									</p>
								</div>
								<div className="col-md-5">
									<div className="pro-images">
										<img src="/assets/images/profession-main.png" alt="" />
									</div>
								</div>
							</div>
						</Tab>
						<Tab eventKey="cosmetic dentistry" title="Cosmetic Dentistry">
							<div className="row justify-content-between">
								<div className="col-md-6">
									<h4 className="fs-36 fw-600 blue-text">Fast & professional treatments for every patient</h4>
									<p className="fs-20 text-gray">
										Proin gravida nibh vel velit auctor aliquet ent. Est vel sum sollicitudin, lorem ad quismi bibe nd
										mi auctor.
									</p>
									<p>
										Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi accumsan sed ipsum velit. Nam nec
										tellus a od tincidunt auctor a ornare odio. Alia ludus animal ius te, ea amet necessitatibus vix.
										Solum persius voluptaria ad nostro quis odio scriptorem ex vim.
									</p>
								</div>
								<div className="col-md-5">
									<div className="pro-images">
										<img src="/assets/images/profession-main.png" alt="" />
									</div>
								</div>
							</div>
						</Tab>
						<Tab eventKey="live" title="Live Dental Advisory">
							<div className="row justify-content-between">
								<div className="col-md-6">
									<h4 className="fs-36 fw-600 blue-text">Fast & professional treatments for every patient</h4>
									<p className="fs-20 text-gray">
										Proin gravida nibh vel velit auctor aliquet ent. Est vel sum sollicitudin, lorem ad quismi bibe nd
										mi auctor.
									</p>
									<p>
										Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi accumsan sed ipsum velit. Nam nec
										tellus a od tincidunt auctor a ornare odio. Alia ludus animal ius te, ea amet necessitatibus vix.
										Solum persius voluptaria ad nostro quis odio scriptorem ex vim.
									</p>
								</div>
								<div className="col-md-5">
									<div className="pro-images">
										<img src="/assets/images/profession-main.png" alt="" />
									</div>
								</div>
							</div>
						</Tab>
					</Tabs>
				</div>
			</section>

			{/* expert */}
			<section className="expert">
				<div className="container">
					<div className="text-center">
						<div className="fs-12 fw-600 red-text open-font text-uppercase">the allsmiles team</div>
						<h1 className="h-primary mt-2">Meet Our Experts</h1>
						<p className="fs-18 light-gray-text open-font">
							An delicata inimicus sea, vis equidem oporteat conclusion mundi et. Nec malis dolor<br></br> fabellas ex,
							eu nec falli iuvaret. Per elitr eloquentiam an esse.
						</p>
					</div>
					<div className="row mt-5 pt-4">
						<div className="col-md-3">
							<div className="expert-card">
								<div className="expert-image">
									<img src="/assets/images/expert-1.png" alt="expert-1" />
								</div>
								<div className="expert-share">
									<span className="iconify" data-icon="ic:outline-share"></span>
								</div>
								<div className="fs-18 fw-600 text-center mt-4 blue-text">Howard Holmes</div>
								<div className="fs-14 red-text fw-600 text-center text-uppercase">estetic dentist</div>
							</div>
						</div>
						<div className="col-md-3 mt-4 mt-md-0">
							<div className="expert-card">
								<div className="expert-image">
									<img src="/assets/images/expert-2.png" alt="expert-1" />
								</div>
								<div className="expert-share">
									<span className="iconify" data-icon="ic:outline-share"></span>
								</div>
								<div className="fs-18 fw-600 text-center mt-4 blue-text">Ella Thompson</div>
								<div className="fs-14 red-text fw-600 text-center text-uppercase">dental technician</div>
							</div>
						</div>
						<div className="col-md-3 mt-4 mt-md-0">
							<div className="expert-card">
								<div className="expert-image">
									<img src="/assets/images/expert-3.png" alt="expert-1" />
								</div>
								<div className="expert-share">
									<span className="iconify" data-icon="ic:outline-share"></span>
								</div>
								<div className="fs-18 fw-600 text-center mt-4 blue-text">Vincent Cooper</div>
								<div className="fs-14 red-text fw-600 text-center text-uppercase">estetic dentist</div>
							</div>
						</div>
						<div className="col-md-3 mt-4 mt-md-0">
							<div className="expert-card">
								<div className="expert-image">
									<img src="/assets/images/expert-4.png" alt="expert-1" />
								</div>
								<div className="expert-share">
									<span className="iconify" data-icon="ic:outline-share"></span>
								</div>
								<div className="fs-18 fw-600 text-center mt-4 blue-text">Danielle Bryant</div>
								<div className="fs-14 red-text fw-600 text-center text-uppercase">dental technician</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* contact */}
			<div className="container-fluid px-0">
				<section className="contact">
					<div className="w-50">
						<div className="contact-image">
							<img src="/assets/images/contact-images.png" alt="" />
						</div>
					</div>
					<div className="w-50 contact-texts">
						<div className="row justify-content-center align-items-center h-100 g-0">
							<div className="col-md-8">
								<div className="fs-36 fw-600 blue-text">Request an Appointment</div>
								<p className="fs-18 open-font light-gray-text">Proin gravida nibh vel velit auctor aliquet justo.</p>
								<div className="mb-3 pt-lg-4">
									<div className="contact-handle flex-lg-row flex-column gap-lg-0 gap-3">
										<input type="text" placeholder="First Name" />
										<input type="text" placeholder="Last Name" />
									</div>
									<div className="contact-handle flex-lg-row flex-column mt-3 gap-lg-0 gap-3">
										<input type="email" placeholder="E-Mail Adress" />
										<input type="text" placeholder="Phone Number" />
									</div>
									<textarea name="message" className="contact-area mt-3"></textarea>
								</div>
								<a href="#" className="view-btn">
									Send Request
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* latest */}
			<section className="latest">
				<div className="container">
					<div className="text-center">
						<div className="fs-12 fw-600 red-text open-font text-uppercase">dental practice</div>
						<h1 className="h-primary mt-2">Read Latest News</h1>
						<p className="fs-18 gray-text open-font">
							In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis.
						</p>
					</div>

					<div className="row mt-5">
						<div className="col-md-4">
							<div className="latest-card">
								<div className="latest-imges">
									<img src="/assets/images/latest-1.png" alt="latest-1" />
								</div>
								<div className="fs-12 fw-600 red-text open-font text-uppercase mt-4">17th November 2020, Pediatric</div>
								<div className="fs-26 fw-600 blue-text mt-2">All about invisalign</div>
								<p className="gray-text fs-14">
									Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh mel
									integre facilis.
								</p>
								<a href="#" className="read-more mt-4">
									read more
									<img src="/assets/images/read-more-btn.png" alt="read-more" />
								</a>
							</div>
						</div>
						<div className="col-md-4 mt-5 mt-md-0">
							<div className="latest-card">
								<div className="latest-imges">
									<img src="/assets/images/latest-2.png" alt="latest-1" />
								</div>
								<div className="fs-12 fw-600 red-text open-font text-uppercase mt-4">17th November 2020, Pediatric</div>
								<div className="fs-26 fw-600 blue-text mt-2">Braces for teens</div>
								<p className="gray-text fs-14">
									Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh mel
									integre facilis.
								</p>
								<a href="#" className="read-more mt-4">
									read more
									<img src="/assets/images/read-more-btn.png" alt="read-more" />
								</a>
							</div>
						</div>
						<div className="col-md-4 mt-5 mt-md-0">
							<div className="latest-card">
								<div className="latest-imges">
									<img src="/assets/images/latest-3.png" alt="latest-1" />
								</div>
								<div className="fs-12 fw-600 red-text open-font text-uppercase mt-4">17th November 2020, Pediatric</div>
								<div className="fs-26 fw-600 blue-text mt-2">Dental association</div>
								<p className="gray-text fs-14">
									Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh mel
									integre facilis.
								</p>
								<a href="#" className="read-more mt-4">
									read more
									<img src="/assets/images/read-more-btn.png" alt="read-more" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* footer */}
			<footer className="footer">
				<div className="container-fluid">
					<div className="row justify-content-around">
						<div className="col-4 mb-4 mb-md-0 col-md-2 col-lg-1">
							<div className="footer-image">
								<img src="/assets/images/footer-1.svg" alt="footer-1" />
							</div>
						</div>
						<div className="col-4 mb-4 mb-md-0 col-md-2 col-lg-1">
							<div className="footer-image">
								<img src="/assets/images/footer-2.svg" alt="footer-1" />
							</div>
						</div>
						<div className="col-4 mb-4 mb-md-0 col-md-2 col-lg-1">
							<div className="footer-image">
								<img src="/assets/images/footer-3.svg" alt="footer-1" />
							</div>
						</div>
						<div className="col-4 col-md-2 col-lg-1">
							<div className="footer-image">
								<img src="/assets/images/footer-4.svg" alt="footer-1" />
							</div>
						</div>
						<div className="col-4 col-md-2 col-lg-1">
							<div className="footer-image">
								<img src="/assets/images/footer-5.svg" alt="footer-1" />
							</div>
						</div>
						<div className="col-4 col-md-2 col-lg-1">
							<div className="footer-image">
								<img src="/assets/images/footer-6.svg" alt="footer-1" />
							</div>
						</div>
					</div>
				</div>
			</footer>

			{/* off-canves */}
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>ChatBot</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<div className="offcanves-inner">
						<div>
							<div className="d-block">
								<div className="off-text">Hi! How Are you</div>
							</div>
							<div className="d-block text-end mt-4">
								<div className="off-text">Am Fine</div>
							</div>
						</div>
					</div>
					<div className="search-mains">
						<input type="text" placeholder="Type Message" />
						<span className="iconify" data-icon="bi:send"></span>
					</div>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default Home;
