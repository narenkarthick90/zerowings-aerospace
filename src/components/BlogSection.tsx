import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Aerospace Cleaning: Drone Technology Revolution",
      excerpt: "Discover how drone technology is transforming the aerospace cleaning industry with unprecedented precision and efficiency.",
      date: "March 15, 2024",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Safety First: How Drones Minimize Risk in Aircraft Maintenance",
      excerpt: "Learn about the safety advantages of drone-powered cleaning systems and their impact on reducing workplace hazards.",
      date: "March 10, 2024",
      category: "Safety",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Case Study: 90% Efficiency Improvement at Major Airline",
      excerpt: "Real-world results showing how our drone cleaning solutions delivered dramatic improvements in cleaning efficiency.",
      date: "March 5, 2024",
      category: "Case Study",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Environmental Impact: Sustainable Cleaning for Aerospace",
      excerpt: "Exploring how drone technology reduces environmental impact while maintaining the highest cleaning standards.",
      date: "February 28, 2024",
      category: "Sustainability",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Training Excellence: Preparing the Next Generation of Operators",
      excerpt: "Inside our comprehensive training programs that ensure every operator meets aerospace industry standards.",
      date: "February 22, 2024",
      category: "Training",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Innovation Spotlight: Next-Gen Cleaning Attachments",
      excerpt: "A deep dive into our latest drone attachment innovations and their game-changing capabilities.",
      date: "February 18, 2024",
      category: "Innovation",
      readTime: "8 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest developments in aerospace cleaning technology and industry insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-card border-border hover:border-primary transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary text-sm font-semibold bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground text-sm">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">{post.date}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:text-primary-foreground hover:bg-primary"
                  >
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;