const Sponsors = () => {
  // Using placeholder sponsor logos - replace with actual sponsor logos when available
  const sponsors = [
    {
      name: "Google Developers",
      logo: "https://www.gstatic.com/devrel-devsite/prod/v2e234f1b0e56c369d2e37ee75497280465768c069a0cfa6e9c92c8271da336e2/developers/images/touchicon-180.png",
      tier: "platinum",
    },
    {
      name: "DHA Suffa University",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8d0PAEJfgOLvdqj5K6_rPQSLZn6xV6vEfw&s",
      tier: "platinum",
    },
    {
      name: "GitHub",
      logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      tier: "gold",
    },
    {
      name: "Microsoft",
      logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
      tier: "gold",
    },
    {
      name: "JetBrains",
      logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png",
      tier: "silver",
    },
    {
      name: "AWS",
      logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      tier: "silver",
    },
  ];

  return (
    <section id="sponsors" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl">
              Powered <span className="text-gradient-accent">By</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're grateful to our partners and sponsors who make our events 
              and initiatives possible, enabling us to serve our community better.
            </p>
          </div>

          {/* Sponsors Grid */}
          <div className="space-y-12">
            {/* Platinum Sponsors */}
            <div>
              <h3 className="text-center font-heading font-semibold text-xl mb-8 text-muted-foreground">
                Platinum Partners
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {sponsors
                  .filter((s) => s.tier === "platinum")
                  .map((sponsor, index) => (
                    <div
                      key={index}
                      className="group bg-card border-2 border-google-yellow/30 rounded-2xl p-8 hover-lift flex items-center justify-center"
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-20 object-contain grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Gold Sponsors */}
            <div>
              <h3 className="text-center font-heading font-semibold text-xl mb-8 text-muted-foreground">
                Gold Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {sponsors
                  .filter((s) => s.tier === "gold")
                  .map((sponsor, index) => (
                    <div
                      key={index}
                      className="group bg-card border border-border rounded-2xl p-6 hover-lift flex items-center justify-center"
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-16 object-contain grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Silver Sponsors */}
            <div>
              <h3 className="text-center font-heading font-semibold text-xl mb-8 text-muted-foreground">
                Silver Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {sponsors
                  .filter((s) => s.tier === "silver")
                  .map((sponsor, index) => (
                    <div
                      key={index}
                      className="group bg-card border border-border rounded-xl p-4 hover-lift flex items-center justify-center"
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-12 object-contain grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Become a Sponsor CTA */}
          <div className="mt-16 bg-gradient-to-r from-google-blue/10 to-google-green/10 rounded-3xl p-8 lg:p-12 border border-border/50 text-center">
            <h3 className="font-heading font-semibold text-2xl lg:text-3xl mb-3">
              Become a Sponsor
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Partner with us to support the next generation of developers and innovators. 
              Get your brand in front of hundreds of talented students.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
