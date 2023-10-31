import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { ProgressBar, Table } from "react-bootstrap";

const Dashboard = () => {
	const simpleCard = [1, 1, 1, 1, 1, 1];
	const homeNav = () => {
		if (document.body.classList.contains("home-sm")) {
			document.body.classList.remove("home-sm");
		} else {
			document.body.classList.add("home-sm");
		}
	};
	return (
		<>
			{/* weekly sumup */}

			<section className="weekly-sumup">
				<div className="d-flex justify-content-between p-2 d-lg-none">
					<img src="/assets/images/logo.svg" alt="" />
					<a
						href="javascript:void(0)"
						className="blue-text fs-20 d-lg-none d-block"
						onClick={() => {
							homeNav();
						}}>
						<span className="iconify" data-icon="humbleicons:bars"></span>
					</a>
				</div>
				<div className="side-bar">
					<div>
						<div className="d-flex justify-content-between justify-content-md-start align-items-center p-3 p-md-0 gap-3">
							<div className="side-logo">
								<img src="/assets/images/dashboard-logo.png" alt="logo" />
							</div>
							<div className="fw-700 dark-blue-text quick-font">cloudcash</div>
							<a
								href="javascript:void(0)"
								className="blue-text fs-20 d-lg-none d-block"
								onClick={() => {
									homeNav();
								}}>
								<span className="iconify" data-icon="charm:cross"></span>
							</a>
						</div>
						<ul className="mt-5">
							<li>
								<a href="#" className="side-links">
									<span className="iconify" data-icon="octicon:graph-24"></span>
									<div>Overview</div>
								</a>
							</li>
							<li>
								<a href="#" className="side-links">
									<span className="iconify" data-icon="ic:round-list"></span>
									<div>Transactions</div>
								</a>
							</li>
							<li>
								<a href="#" className="side-links">
									<span className="iconify" data-icon="solar:card-line-duotone"></span>
									<div>Cards</div>
								</a>
							</li>
							<li>
								<a href="#" className="side-links">
									<span className="iconify" data-icon="ph:file-thin"></span>
									<div>Invoices</div>
								</a>
							</li>
							<li>
								<a href="#" className="side-links">
									<span className="iconify" data-icon="ri:award-line"></span>
									<div>Goals</div>
								</a>
							</li>
							<li>
								<a href="#" className="side-links">
									<span className="iconify" data-icon="solar:settings-outline"></span>
									<div>Settings</div>
								</a>
							</li>
						</ul>
					</div>
					<div className="text-center">
						<div className="awesome-cloud">
							<img src="/assets/images/awesome-cloud.png" alt="awesome" />
						</div>
						<div className="fs-10 light-black-text">Give your money awesome space in cloud</div>
					</div>
				</div>
				<div className="weeekly-main">
					<div className="row">
						<div className="col-md-6">
							<h1 className="fs-42 fw-600 light-black-text sup-font text-center text-md-start">Weekly sumup</h1>
							<div className="para-text sup-font">Get summary of your weekly online transactions here.</div>
						</div>
						<div className="col-md-6 align-self-center">
							<div className="header-main">
								<div className="d-flex gap-3 align-items-center">
									<div className="fs-24 main-text">
										<span className="iconify" data-icon="ic:outline-mail"></span>
									</div>
									<div className="notifications">
										<span className="iconify" data-icon="ph:bell"></span>
										<div className="noti-circle"></div>
									</div>
								</div>
								<div className="d-flex align-items-center gap-3">
									<div className="andrew-circle">
										<img src="/assets/images/andrwe.svg" alt="amdrew" />
									</div>
									<div>
										<div className="fs-14 sup-font fw-600 light-black-text">Andrew</div>
										<div className="fs-14 sup-font fw-600 para-text">Admin account</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* inner */}
					<div className="main-inner">
						<div className="row">
							<div className="col-md-6">
								<div className="dash-swiper-card mt-5">
									<div className="fs-20 fw-600 sup-font light-black-font">Cards</div>
									<div className="d-flex align-items-start gap-3">
										<div className="swiper-maintane">
											<Swiper
												scrollbar={{
													hide: true,
												}}
												navigation={true}
												modules={[Scrollbar, Navigation]}
												className="mySwiper dashboard-cards">
												{simpleCard.map((item, index) => {
													return (
														<>
															<SwiperSlide>
																<div className="simple-card px-5 px-xl-0">
																	<img src="/assets/images/simple-cards.png" alt="" className="w-100" />
																</div>
															</SwiperSlide>
														</>
													);
												})}
											</Swiper>
											<div className="d-flex mt-2">
												<div className="fs-14 lato-font para-text">Weekly payment limit</div>
												<div className="fs-14 ms-5 lato-font light-black-text">$350.60 / $4000</div>
											</div>
										</div>
										<div className="dashboard-card-right">
											<div className="fs-26 lato-font text-nowrap fw-700 light-purple-text lh-1">
												<span className="fs-18">$</span> 2850.75
											</div>
											<div className="text-end fs-14 sup-font para-text mt-2">Current balance</div>
											<div className="fs-18 text-end lato-font text-nowrap fw-700 green-text">
												<span className="fs-18">$</span> 2850.75
											</div>
											<div className="text-end fs-14 sup-font para-text">Income</div>
											<div className=" mt-2 fs-18 text-end lato-font text-nowrap fw-700 green-text light-red-text">
												$ 350.60
											</div>
											<div className="text-end fs-14 sup-font para-text">Outcome</div>
											<div className="d-flex justify-content-end mt-3">
												<label className="switch">
													<input type="checkbox" />
													<span className="slider round"></span>
												</label>
											</div>
											<div className="text-end fs-14 sup-font para-text">Deacivate card</div>
										</div>
									</div>
								</div>
								<div className="dashboard-tables mt-5">
									<div className="fs-20 fw-600 light-black-text sup-font">Transaction history</div>
									<Table>
										<thead>
											<tr>
												<th>Reciever</th>
												<th>Type</th>
												<th>Date</th>
												<th>Amount</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div className="d-flex align-items-center gap-2">
														<div className="market-circle">
															<img src="/assets/images/market.svg" alt="market" />
														</div>
														<div className="fs-14 sup-font light-black-text">Tesco Market</div>
													</div>
												</td>
												<td className="text">
													<div className="fs-14 sup-font off-white-text text-start">Shopping</div>
												</td>
												<td>
													<div className="fs-14 sup-font off-white-text">13 Dec 2020</div>
												</td>
												<td>
													<div className="fs-14 light-black-text lato-font fw-700">$75.67</div>
												</td>
											</tr>
											<tr>
												<td>
													<div className="d-flex align-items-center gap-2">
														<div className="market-circle">
															<img src="/assets/images/bus.svg" alt="market" />
														</div>
														<div className="fs-14 sup-font light-black-text">ElectroMen Market</div>
													</div>
												</td>
												<td>
													<div className="fs-14 sup-font off-white-text text-start">Shopping</div>
												</td>
												<td>
													<div className="fs-14 sup-font off-white-text">14 Dec 2020</div>
												</td>
												<td>
													<div className="fs-14 light-black-text lato-font fw-700">$250.00</div>
												</td>
											</tr>
											<tr>
												<td>
													<div className="d-flex align-items-center gap-2">
														<div className="market-circle">
															<img src="/assets/images/leave.svg" alt="market" />
														</div>
														<div className="fs-14 sup-font light-black-text">Fiorgio Restaurant</div>
													</div>
												</td>
												<td>
													<div className="fs-14 sup-font off-white-text text-start">Food</div>
												</td>
												<td>
													<div className="fs-14 sup-font off-white-text">07 Dec 2020</div>
												</td>
												<td>
													<div className="fs-14 light-black-text lato-font fw-700">$19.50</div>
												</td>
											</tr>
											<tr>
												<td>
													<div className="d-flex align-items-center gap-2">
														<div className="market-circle">
															<img src="/assets/images/person.svg" alt="market" />
														</div>
														<div className="fs-14 sup-font light-black-text">John Mathew Kayne</div>
													</div>
												</td>
												<td>
													<div className="fs-14 sup-font off-white-text text-start">Sport</div>
												</td>
												<td>
													<div className="fs-14 sup-font off-white-text">06 Dec 2020</div>
												</td>
												<td>
													<div className="fs-14 light-black-text lato-font fw-700">$350</div>
												</td>
											</tr>
											<tr>
												<td>
													<div className="d-flex align-items-center gap-2">
														<div className="market-circle">
															<img src="/assets/images/person.svg" alt="market" />
														</div>
														<div className="fs-14 sup-font light-black-text">Ann Marlin</div>
													</div>
												</td>
												<td>
													<div className="fs-14 sup-font off-white-text text-start">Shopping</div>
												</td>
												<td>
													<div className="fs-14 sup-font off-white-text">31 Nov 2020</div>
												</td>
												<td>
													<div className="fs-14 light-black-text lato-font fw-700">$430</div>
												</td>
											</tr>
										</tbody>
									</Table>
								</div>
							</div>
							<div className="col-md-6 mt-5">
								<div className="goals-main">
									<div className="d-flex align-items-center gap-3 mb-3">
										<div className="fs-20 fw-600 sup-font light-black-text">Goals</div>
										<img src="/assets/images/goals-plus.svg" alt="plus" />
									</div>
									<Swiper
										slidesPerView={2}
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
										modules={[Navigation]}
										className="mySwiper">
										<SwiperSlide>
											<div className="goals-card">
												<div>
													<div className="dark-gray-text lato-font  fw-600">$550</div>
													<div className="para-text sup-font fs-14">12/20/20</div>
												</div>
												<div>
													<img src="/assets/images/holiday.svg" alt="holiday" />
													<div className="fs-20 sub-font light-black-text">Holidays</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="goals-card">
												<div>
													<div className="dark-gray-text lato-font  fw-600">$200</div>
													<div className="para-text sup-font fs-14">12/20/20</div>
												</div>
												<div>
													<img src="/assets/images/brush.svg" alt="holiday" />
													<div className="fs-20 sub-font light-black-text">Renovation</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="goals-card">
												<div>
													<div className="dark-gray-text lato-font  fw-600">$820</div>
													<div className="para-text sup-font fs-14">12/20/20</div>
												</div>
												<div>
													<img src="/assets/images/game.svg" alt="holiday" />
													<div className="fs-20 sub-font light-black-text">Xbox</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="goals-card">
												<div>
													<div className="dark-gray-text lato-font  fw-600">$550</div>
													<div className="para-text sup-font fs-14">12/20/20</div>
												</div>
												<div>
													<img src="/assets/images/holiday.svg" alt="holiday" />
													<div className="fs-20 sub-font light-black-text">Holidays</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="goals-card">
												<div>
													<div className="dark-gray-text lato-font  fw-600">$200</div>
													<div className="para-text sup-font fs-14">12/20/20</div>
												</div>
												<div>
													<img src="/assets/images/brush.svg" alt="holiday" />
													<div className="fs-20 sub-font light-black-text">Renovation</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="goals-card">
												<div>
													<div className="dark-gray-text lato-font  fw-600">$820</div>
													<div className="para-text sup-font fs-14">12/20/20</div>
												</div>
												<div>
													<img src="/assets/images/game.svg" alt="holiday" />
													<div className="fs-20 sub-font light-black-text">Xbox</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="goals-card">
												<div>
													<div className="dark-gray-text lato-font  fw-600">$550</div>
													<div className="para-text sup-font fs-14">12/20/20</div>
												</div>
												<div>
													<img src="/assets/images/holiday.svg" alt="holiday" />
													<div className="fs-20 sub-font light-black-text">Holidays</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="goals-card">
												<div>
													<div className="dark-gray-text lato-font  fw-600">$200</div>
													<div className="para-text sup-font fs-14">12/20/20</div>
												</div>
												<div>
													<img src="/assets/images/brush.svg" alt="holiday" />
													<div className="fs-20 sub-font light-black-text">Renovation</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="goals-card">
												<div>
													<div className="dark-gray-text lato-font  fw-600">$820</div>
													<div className="para-text sup-font fs-14">12/20/20</div>
												</div>
												<div>
													<img src="/assets/images/game.svg" alt="holiday" />
													<div className="fs-20 sub-font light-black-text">Xbox</div>
												</div>
											</div>
										</SwiperSlide>
									</Swiper>
								</div>
								<div className="outcome mt-4">
									<div className="fs-20 fw-600 sup-font light-black-text">Outcome Statistics</div>
									<div className="d-flex mt-2 justify-content-between align-items-center gap-1">
										<div className="out-box-1">
											<img src="/assets/images/outcome-1.svg" alt="out-1" />
										</div>
										<div className="pro-bar">
											<div className="d-flex align-items-center gap-2 w-100">
												<ProgressBar now={52} className="align-self-center" />
												<div className="fs-24 fw-600 lato-font dark-gray-text ">52%</div>
											</div>
											<div className="fs-14 sub-font para-text ">Shopping</div>
										</div>
									</div>
									<div className="d-flex mt-2 justify-content-between align-items-center gap-1">
										<div className="out-box-1 out-2">
											<img src="/assets/images/outco,e-2.svg" alt="out-1" />
										</div>
										<div className="pro-bar pro-bar-2">
											<div className="d-flex align-items-center gap-2 w-100">
												<ProgressBar now={21} className="align-self-center" />
												<div className="fs-24 fw-600 lato-font dark-gray-text ">21%</div>
											</div>
											<div className="fs-14 sub-font para-text ">Electronics</div>
										</div>
									</div>
									<div className="d-flex mt-2 justify-content-between align-items-center gap-1">
										<div className="out-box-1 out-3">
											<img src="/assets/images/outcome-3.svg" alt="out-1" />
										</div>
										<div className="pro-bar pro-bar-3">
											<div className="d-flex align-items-center gap-2 w-100">
												<ProgressBar now={74} className="align-self-center" />
												<div className="fs-24 fw-600 lato-font dark-gray-text ">74%</div>
											</div>
											<div className="fs-14 sub-font para-text ">Travels</div>
										</div>
									</div>
								</div>
								<div className="new mt-4">
									<div className="row gx-2">
										<div className="col-md-8">
											<div className="new-card">
												<div className="fs-light-black-text sup-font fs-20 fw-600 my-2">New transaction</div>
												<div className="d-flex gap-2 align-items-center">
													<div className="new-images text-center">
														<img src="/assets/images/new-11.svg" alt="new-1" />
														<div className="light-black-text mt-2 fs-12 sup-font">Ann</div>
													</div>
													<div className="new-images text-center">
														<img src="/assets/images/new-2.svg" alt="new-1" />
														<div className="light-black-text mt-2 fs-12 sup-font">Monica</div>
													</div>
													<div className="new-images text-center">
														<img src="/assets/images/new-3.svg" alt="new-1" />
														<div className="light-black-text mt-2 fs-12 sup-font">John</div>
													</div>
													<div className="new-images text-center">
														<img src="/assets/images/new-4.svg" alt="new-1" />
														<div className="light-black-text mt-2 fs-12 sup-font">Mike</div>
													</div>
													<div className="new-images text-center">
														<img src="/assets/images/new-5.svg" alt="new-1" />
														<div className="light-black-text mt-2 fs-12 sup-font">Mia</div>
													</div>
													<div className="new-images-1 text-center">
														<img src="/assets/images/goals-plus.svg" alt="new-1" />
														<div className="light-black-text mt-2 fs-12 sup-font">Add New</div>
													</div>
												</div>
												<div className="d-flex justify-content-between mt-2">
													<div className="new-inputs">
														<input type="text" placeholder="0" />
														<div className="dollar-handle">$</div>
													</div>
													<button type="button" className="tranfer-btn">
														Send the transfer
														<span className="iconify" data-icon="mingcute:right-line"></span>
													</button>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="get-box mx-auto mx-md-0">
												<img src="/assets/images/get-box.png" alt="box" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Dashboard;
