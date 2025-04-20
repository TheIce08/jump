
      //图片组的展开和收起
        function toggleImages() {
            const gallery = document.getElementById('imageGallery');
            const toggleBtn = document.querySelector('.image-toggle');
            
            if (gallery.style.display === 'none' || !gallery.style.display) {
                gallery.style.display = 'grid';
                toggleBtn.innerHTML = '▲ 收起图片组';
            } else {
                gallery.style.display = 'none';
                toggleBtn.innerHTML = '▼ 展开图片组';
            }
        }
    