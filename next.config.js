module.exports = {
	future: {
		webpack5: true,
	},
	webpack: (config, { dev, isServer }) => {
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom': 'preact/compat',
			})
		}

		return config
	},
}
