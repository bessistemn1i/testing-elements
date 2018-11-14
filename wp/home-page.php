<?php 
    /*
        Template Name: Testing Elements page
    */
    session_start();
    if(!isset ($_SESSION['favorite'])) {
        $_SESSION['favorite'] = [];
    }

    function is_favorite($id) {
        return in_array($id, $_SESSION['favorite']);
    }
?>

<!doctype html>
<html lang="ru">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Testing Elements</title>
    <link rel="stylesheet" href="<?php echo bloginfo('stylesheet_directory');?>/style.css"" />
</head>

<body class="main-vis">
    <section class="ajaxPhp">
        <div class="main">

        </div>

        <button type="button" class="ajax-btn">Send</button>

    </section>

    <section class="ajaxSelect">
        <form id="form">
            <h2>Which category are you interested in?</h2>
            <select id="category-select">
                <option disabled selected>Please select something</option>
                <option value="1">Furniture</option>
                <option value="2">Lighting</option>
                <option value="3">Accssories</option>
            </select>
            <select id="subcategory-select" class="subcategory">

            </select>
        </form>
    </section>

    <section class="ajaxBtn">
        <div class="blog-posts">
            <div id="blog-post1" class="blog-post blog-post1" <?php if(is_favorite(101)) { echo 'blog-post--favorite'; } ?> >
                <h3>Blog Post 101</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae autem, iusto sapiente voluptatibus adipisci atque! Eius alias ad a doloremque amet vitae totam quod impedit, inventore odio exercitationem iure laudantium esse omnis adipisci molestiae? Fugiat delectus eum iusto a vero quis repellat, sunt officiis laboriosam repellendus enim fuga sapiente iste. Dignissimos ab illo recusandae sed at officia culpa ducimus possimus ut, nostrum dicta, in laboriosam aliquid inventore alias hic voluptatibus numquam distinctio quos. Saepe voluptatum suscipit sequi, qui velit mollitia illum. Natus quibusdam molestias iure dolorem eveniet illo dolor, eos harum et ipsa temporibus quos, sequi aperiam odit amet nihil autem? Assumenda hic at quibusdam id nostrum, eos debitis quos repellendus veniam, natus autem cumque ad iure aliquid est voluptates molestiae officia amet.</p>
                <button class="favorite-button">Favorite</button>
            </div>
            <div id="blog-post2" class="blog-post blog-post2" <?php if(is_favorite(102)) { echo 'blog-post--favorite';} ?> >
                <h3>Blog Post 102</h3>
                <p>Asperiores sapiente illo voluptas quisquam culpa exercitationem quibusdam. Excepturi nesciunt reprehenderit illum quibusdam, ea alias dolorem possimus consequatur officiis quasi consectetur fugit inventore ut. Perspiciatis totam vero, ab repellendus consectetur molestiae? Accusamus voluptatum impedit mollitia maxime autem, accusantium sit aut fugit est tempore rem enim sunt sapiente cumque excepturi! Illum sunt blanditiis hic, nesciunt nam, reiciendis minima nulla consectetur cum corrupti veritatis dolores! Rem cumque dignissimos optio repudiandae placeat, nostrum illum saepe ipsa neque ratione consectetur dolor voluptate unde ut, ipsam a, adipisci quaerat! Eos ullam sit modi quisquam nemo ea mollitia temporibus porro blanditiis et, vero provident id iste, impedit dignissimos rerum quam explicabo iure odio, praesentium maiores accusantium natus. Dolor perspiciatis dolorem magni quidem accusamus maxime expedita iusto aspernatur suscipit molestias?</p>
                <button class="favorite-button">Favorite</button>
            </div>
            <div id="blog-post3" class="blog-post blog-post3" <?php if(is_favorite(103)) { echo 'blog-post--favorite';} ?> >
                <h3>Blog Post 103</h3>
                <p>Unde pariatur quisquam magni facilis, commodi quasi temporibus nobis expedita eveniet quos quam quaerat excepturi consequatur cupiditate tempora enim ut delectus exercitationem dicta porro? Mollitia facere assumenda dolore itaque nam, quisquam modi, omnis quis, fugiat odit sit. Aperiam accusamus est voluptatem officiis voluptate cum nesciunt amet magni laudantium? Commodi quaerat fugit quia, facere itaque, obcaecati, quo cum illum earum ipsa veritatis tenetur? Fuga ab ipsam eos alias ullam corporis recusandae quasi, incidunt harum dolorum repellendus quos ratione cumque ut natus culpa consequuntur possimus minima. Architecto nihil autem odit quas quae aspernatur, molestias impedit ipsam voluptatum culpa rem doloribus veniam, voluptate maxime eius id quisquam corrupti expedita odio dolorum? Nesciunt totam unde molestiae, sint corporis, dolorem adipisci quod voluptatibus, reiciendis ex dolore consectetur in.</p>
                <button class="favorite-button">Favorite</button>
            </div>
            <div id="blog-post4" class="blog-post blog-post4" <?php if(is_favorite(104)) {echo 'blog-post--favorite';} ?>>
                <h3>Blog Post 104</h3>
                <p>Voluptatibus ducimus voluptatum fuga placeat? Cupiditate nostrum et quia sit adipisci vitae accusantium temporibus ab nesciunt nihil, officia aperiam nisi cum, quaerat, eaque numquam consequatur rerum dolores! Earum praesentium expedita rem voluptatem obcaecati omnis cumque voluptatibus! Cupiditate, voluptatibus eveniet natus quos corrupti, exercitationem est eos saepe explicabo provident ducimus optio aperiam expedita, tempore voluptate deserunt dolorum repellat obcaecati nam nisi perspiciatis. Dolorum, eveniet odio ea deserunt ex libero odit nobis perspiciatis beatae at esse id eum iure nostrum, accusantium unde tempore cum expedita, error quisquam sunt. Voluptatibus doloribus sit fugit vero animi officia magnam iusto magni soluta et eum, facilis tempora at accusamus laborum nisi aliquam voluptatum eaque adipisci, impedit omnis optio. Maxime quasi aperiam dignissimos laudantium impedit enim fuga nemo corporis nesciunt.</p>
                <button class="favorite-button">Favorite</button>
            </div>
        </div>
    </section>
    <script src="<?php bloginfo('stylesheet_directory'); ?>/main.js?v='<?php echo rand(); ?>' "></script>
</body>

</html>