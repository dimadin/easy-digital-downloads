<?php
namespace EDD\Reports\Data\Charts\v2;

/**
 * Represents a manifestation of a ChartJS v2 object's attributes in PHP form.
 *
 * Primarily used to simplify translating server-side arguments into client-side ones.
 *
 * @since 3.0.0
 *
 * @see Hydrator
 */
class Manifest {

	/**
	 * Represents the chart type to be manifested.
	 *
	 * @since 3.0
	 * @var   string
	 */
	private $type;

	/**
	 * Represents the unfiltered chart options for the manifest.
	 *
	 * @since 3.0
	 * @var   array
	 */
	private $options = array();

	/**
	 * Datasets associated with the current graph.
	 *
	 * @since 3.0.0
	 * @var   array
	 */
	private $datasets = array();

	/**
	 * Sets up the manifest.
	 *
	 * @since 3.0
	 *
	 * @param string $type    Type of chart manifest.
	 * @param array  $options Array of options to populate the manifest with.
	 */
	public function __construct( $type, $options ) {
		$this->set_type( $type );
		$this->set_options( $options );
	}

	/**
	 * Retrieves the chart type.
	 *
	 * @since 3.0
	 *
	 * @return string Chart type.
	 */
	public function get_type() {
		return $this->type;
	}

	/**
	 * Sets the chart type for the manifest.
	 *
	 * @since 3.0
	 *
	 * @param string $type Chart type to be manifested.
	 */
	private function set_type( $type ) {
		$this->type = sanitize_key( $type );
	}

	/**
	 * Stores the unfiltered chart options for later access.
	 *
	 * @since 3.0
	 *
	 * @param array $options Array of chart options to be populated into datasets.
	 */
	private function set_options( $options ) {
		$this->options = $options;
	}

	/**
	 * Retrieves the manifest datasets.
	 *
	 * @since 3.0
	 *
	 * @return array Datasets for this chart if any are defined, otherwise an empty array.
	 */
	public function get_datasets() {
		return $this->datasets;
	}

	/**
	 * Determines whether the current chart manifest contains any datasets.
	 *
	 * @since 3.0
	 *
	 * @return bool True if there are datasets, otherwise false.
	 */
	public function has_datasets() {
		return ! empty( $this->get_datasets() );
	}

	/**
	 * Adds a dataset.
	 *
	 * @since 3.0
	 *
	 * @param array $data Array of dataset data.
	 * @return bool True if the dataset was added, otherwise false.
	 */
	public function add_dataset( $data ) {
		$handler = $this->get_type_handler();

		if ( ! empty( $handler ) ) {
			$this->datasets[] = new $handler( $data );

			return true;
		}

		return false;
	}

	/**
	 * Retrieves the type handler for the current dataset type.
	 *
	 * @since 3.0
	 *
	 * @return string Dataset type handler.
	 */
	public function get_type_handler() {
		$handler = '';

		switch( $this->get_type() ) {

			case 'bar':
				$handler = 'EDD\Reports\Data\Charts\v2\Bar_Dataset';
				break;

			case 'line':
			default:
				$handler = 'EDD\Reports\Data\Charts\v2\Line_Dataset';
				break;


		}
	}
}
