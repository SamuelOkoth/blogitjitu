import Blog from "./Blog"
const blogPosts = [
  {
    title: "The Power of Positive Thinking",
    content: "In a world filled with challenges, maintaining a positive mindset can make all the difference. This blog post explores the benefits of positive thinking and provides practical tips for incorporating it into your daily life."
  },
  {
    title: "Exploring the Wonders of Nature",
    content: "Nature has a way of captivating our senses and soothing our souls. Join us on an exploration of the breathtaking landscapes, diverse wildlife, and awe-inspiring wonders that our planet has to offer."
  },
  {
    title: "Unlocking Creativity: Embracing the Artist Within",
    content: "Creativity is a powerful force that resides within each of us. In this blog post, we delve into the process of unlocking creativity, nurturing our inner artist, and embracing the joy of self-expression."
  },
  {
    title: "The Art of Mindfulness: Finding Peace in the Present Moment",
    content: "In a fast-paced world, practicing mindfulness can help us find inner peace and restore balance. Discover the transformative effects of mindfulness meditation and learn practical techniques to cultivate awareness and live in the present moment."
  },
  {
    title: "Embracing Change: Thriving in the Face of Uncertainty",
    content: "Change is an inevitable part of life, and learning to embrace it can lead to personal growth and resilience. This blog post explores strategies for navigating change, adapting to new circumstances, and embracing the opportunities it brings."
  }
];

function Container() {
    return (
        <section>
            <Blog Title="Power of positivity" Content= " There's something undeniably captivating about kittens. With their wide-eyed innocence, boundless energy, and fluffy little bodies, they effortlessly steal our hearts. In this blog post, we embark on an endearing journey, following the life of a sweet kitten. Join us as we explore the adventures, growth, and immense joy that this little feline brings to its newfound home."/>

            {
                blogPosts.map(
                    (blog) => (
                        <Blog Title= {blog.title } Content = {blog.content}/>
                    )
                )
            }


        </section>

    )
}
export default Container