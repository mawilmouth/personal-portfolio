export const projectsData = [
  {
    name: 'CreatorVault',
    description: `This is full-stack ecommerce Next.JS app that is driven via 
      many API endpoints in ActionVFX.com. This website features a store that 
      sells stock assets for content creators and is repsonsible for selling 
      and downloading large files. In this project, I was responsible for 
      building the entire UI and all of the front end functionality. I also 
      helped with planning the Rails API that drives the content for this project.`,
    img: '/images/projects/cv.png',
    tech: ['SASS', 'FoundationCSS', 'Typescript', 'React.JS', 'Redux', 'Next.JS', 'Jest', 'Stripe', 'Paypal'],
    location: {
      url: 'https://www.creatorvault.com',
      external: true
    }
  },
  {
    name: 'ActionVFX',
    description: `This is a Ruby on Rails ecommerce app that provides API 
      endpoints for CreatorVault.com and is driven by a custom Ruby on Rails
      headless CMS. This website features a store that sells stock footage
      for visual effect artists and a blog. In this project, I was responsible 
      for maintaining the frontend and implementing/planning new features.`,
    img: '/images/projects/avfx.png',
    tech: ['Haml', 'ERB', 'SASS', 'FoundationCSS', 'Javascript', 'Jquery', 'Ruby on Rails', 'Rspec', 'Stripe', 'Paypal'],
    location: {
      url: 'https://www.actionvfx.com',
      external: true
    }
  },
  {
    name: 'Spina Sider',
    description: `This is an extension to Spina CMS which is a CMS for Rails 6
      applications. This gem can be installed on RubyGems and provides an additional 
      rich text editor feature. This is used to insert a before/after image slider in
      blog posts or site pages. - MIT License`,
    img: '/images/projects/spina-slider.png',
    tech: ['Haml', 'ERB', 'SASS', 'Javascript', 'Jquery', 'Ruby on Rails', 'TwentyTwenty.js'],
    embed: {
      url: 'https://www.youtube.com/embed/YnaVexltZtk?autoplay=1',
    }
  }
];