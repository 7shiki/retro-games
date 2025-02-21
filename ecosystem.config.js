module.exports = {
    apps: [
      {
        name: 'retro-games',
        script: 'npm',
        args: 'start',
        watch: false,
        instances: 1,
        env: {
          PORT: 4200
        }
      }
    ]
  }