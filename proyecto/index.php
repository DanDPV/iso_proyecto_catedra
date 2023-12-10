<?php include "functions.php" ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="styles.css">
	<title>Start up</title>
</head>
<body>
<div class="header">
<header class="top-header"> 
		<h1></h1> 
	</header> 
</div>
<div>
<h2>Expedia updates center</>
</div>
	<div class="page">
		<div class="left">
			<select name="products" id="products">
				<option value="">All Products</option>
				<option value="Car">Cars</option>
				<option value="Flight">Flights</option>
				<option value="General">General</option>
				<option value="Hotel">Hotels</option>

			</select>
		</div>
		<div class="right">
			<h2>All Products</h2>
			<div class="product-wrapper">
				
			<?php 
				$products = getAllProducts();
				foreach ($products as $product) {
					?>
						<div class="product">
							<div class="left">
								<img src="<?php echo $product['image'] ?>" class="thumbnail"  alt="">
							</div>
							<div class="right">
								<p class="title"><?php echo $product['title'] ?></p>
								<p class="date"><?php echo $product['Release_date'] ?></p>
								<p class="description"><?php echo $product['description'] ?></p>
							</div>
						</div>
					<?php
				}
			?>
			</div>
		</div>
	</div>



	<script src="script.js"></script> <!-- Link to the javascript file -->
</body>
</html>
