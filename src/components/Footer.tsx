const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Zerowings Aerospace
            </h3>
            <p className="text-muted-foreground mb-4">
              Leading the future of aerospace cleaning with advanced drone technology.
            </p>
            <div className="flex space-x-4">
              <span className="text-primary cursor-pointer hover:text-primary/80">LinkedIn</span>
              <span className="text-primary cursor-pointer hover:text-primary/80">Twitter</span>
              <span className="text-primary cursor-pointer hover:text-primary/80">YouTube</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer">Drone Cleaning</li>
              <li className="hover:text-primary cursor-pointer">Surface Analysis</li>
              <li className="hover:text-primary cursor-pointer">Quality Assurance</li>
              <li className="hover:text-primary cursor-pointer">Training Programs</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer">About Us</li>
              <li className="hover:text-primary cursor-pointer">Careers</li>
              <li className="hover:text-primary cursor-pointer">News & Events</li>
              <li className="hover:text-primary cursor-pointer">Partnerships</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer">Documentation</li>
              <li className="hover:text-primary cursor-pointer">Technical Support</li>
              <li className="hover:text-primary cursor-pointer">Safety Guidelines</li>
              <li className="hover:text-primary cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Zerowings Aerospace. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;