<template>
    <!-- side bar  -->
    <div class="dark-overlay"></div>
    <div class="sidebar style-2 " >
		<a href="index.html" class="side-menu-logo">
			<img src="@/assets/images/main_logo.png" alt="logo">
		</a>
		<ul class="nav navbar-nav">	
			<li class="nav-label">{{ $t('main_menu') }}</li>
			<li>
				<a class="nav-link" href="index.html">
					<span class="dz-icon">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
							<path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/>
						</svg>
					</span>
					<span>My Cargo History</span>
				</a>
			</li>
			<li>
				<a class="nav-link" href="package.html">
					<span class="dz-icon">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12.6 18.06c-.36.28-.87.28-1.23 0l-6.15-4.78c-.36-.28-.86-.28-1.22 0-.51.4-.51 1.17 0 1.57l6.76 5.26c.72.56 1.73.56 2.46 0l6.76-5.26c.51-.4.51-1.17 0-1.57l-.01-.01c-.36-.28-.86-.28-1.22 0l-6.15 4.79zm.63-3.02l6.76-5.26c.51-.4.51-1.18 0-1.58l-6.76-5.26c-.72-.56-1.73-.56-2.46 0L4.01 8.21c-.51.4-.51 1.18 0 1.58l6.76 5.26c.72.56 1.74.56 2.46-.01z"/></svg>
					</span>
					<span>Track Cargo</span>
				</a>
				<router-link class="nav-link" to="/t_q_layout">
					<span class="dz-icon">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12.6 18.06c-.36.28-.87.28-1.23 0l-6.15-4.78c-.36-.28-.86-.28-1.22 0-.51.4-.51 1.17 0 1.57l6.76 5.26c.72.56 1.73.56 2.46 0l6.76-5.26c.51-.4.51-1.17 0-1.57l-.01-.01c-.36-.28-.86-.28-1.22 0l-6.15 4.79zm.63-3.02l6.76-5.26c.51-.4.51-1.18 0-1.58l-6.76-5.26c-.72-.56-1.73-.56-2.46 0L4.01 8.21c-.51.4-.51 1.18 0 1.58l6.76 5.26c.72.56 1.74.56 2.46-.01z"/></svg>
					</span>
					<span>T and q testing</span>
				</router-link>
			</li>
			<li>
				<router-link to="/contact_us" class="nav-link">
					<span class="dz-icon">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12.6 18.06c-.36.28-.87.28-1.23 0l-6.15-4.78c-.36-.28-.86-.28-1.22 0-.51.4-.51 1.17 0 1.57l6.76 5.26c.72.56 1.73.56 2.46 0l6.76-5.26c.51-.4.51-1.17 0-1.57l-.01-.01c-.36-.28-.86-.28-1.22 0l-6.15 4.79zm.63-3.02l6.76-5.26c.51-.4.51-1.18 0-1.58l-6.76-5.26c-.72-.56-1.73-.56-2.46 0L4.01 8.21c-.51.4-.51 1.18 0 1.58l6.76 5.26c.72.56 1.74.56 2.46-.01z"/></svg>
					</span>
					<span>Contact Us</span>
				</router-link>
			</li>
			<li>
				<a class="nav-link" href="ui-components.html">
					<span class="dz-icon">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>
					</span>
					<span>T & C's</span>
				</a>
			</li>
			
		</ul>
		<a href="javascript:void(0);" onclick="deleteAllCookie()" class="btn btn-primary btn-sm cookie-btn">Delete Cookie</a>
		<div class="sidebar-bottom d-none">
			<h6 class="name">W3Grocery - Multipurpose App</h6>
			<span class="ver-info">App Version 1.0</span>
        </div>
		<div class="author-box mt-auto mb-0">
			<div class="dz-media">
				
			</div>
			<div class="dz-info">
				<h5 class="name">James Hawkins</h5>
				<span>jameshawkins@mail.com</span>
			</div>
		</div>
    </div>

    <!-- end side bar  -->
</template>

<script>
    export default {
        name : "SideBarLayout",
    }
</script>
