import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const aiResources = [
    // id, name, url, description, image
    {
      id: 1,
      name: "OpenAI",
      url: "https://openai.com/",
      description:
        "OpenAI is an artificial intelligence research laboratory consisting of the for-profit OpenAI LP and the non-profit OpenAI Inc.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/375px-OpenAI_Logo.svg.png",
    },
    {
      id: 2,
      name: "DeepMind",
      url: "https://deepmind.com/",
      description:
        "DeepMind Technologies Limited is a British artificial intelligence company founded in September 2010.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/DeepMind_new_logo.svg/375px-DeepMind_new_logo.svg.png",
    },
    {
      id: 3,
      name: "IBM Watson",
      url: "https://www.ibm.com/watson",
      description:
        "IBM Watson is a technology platform that uses natural language processing and machine learning to reveal insights from large amounts of unstructured data.",
      image: "https://miro.medium.com/v2/resize:fit:1200/0*pBUKeJ5j2XPw8SyZ",
    },
    {
      id: 4,
      name: "Microsoft Azure Cognitive Services",
      url: "https://azure.microsoft.com/en-us/services/cognitive-services/",
      description:
        "Azure Cognitive Services is a set of cloud-based services and APIs for building intelligent applications.",
      image:
        "https://azure.microsoft.com/svghandler/cognitive-services/?width=600&height=315",
    },
    {
      id: 5,
      name: "Google Cloud AI",
      url: "https://cloud.google.com/solutions/ai",
      description:
        "Google Cloud AI is a set of machine learning services that enables you to easily build and deploy superior models using Google’s pre-trained models.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1280px-Google_Cloud_logo.svg.png",
    },
    {
      id: 6,
      name: "Amazon Web Services (AWS) AI",
      url: "https://aws.amazon.com/machine-learning/",
      description:
        "Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },

    {
      id: 7,
      name: "Fast.ai",
      url: "https://www.fast.ai/",
      description:
        "fast.ai is a research lab with the mission of making deep learning more accessible.",
      image:
        "https://thumb.tildacdn.com/tild3263-3763-4737-a163-623437306266/-/resize/280x/-/format/webp/fastai.png",
    },
    {
      id: 8,
      name: "Hugging Face",
      url: "https://huggingface.co/",
      description:
        "Hugging Face is an AI research organization that provides state-of-the-art NLP technologies.",
      image:
        "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo-with-title.png",
    },
    {
      id: 9,
      name: "Plotly",
      url: "https://plotly.com/",
      description:
        "Plotly is a technical computing company headquartered in Montreal, Quebec, that develops online data analytics and visualization tools.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/Plotly-logo.png",
    },
    {
      id: 10,
      name: "Bokeh",
      url: "https://bokeh.org/",
      description:
        "Bokeh is an interactive visualization library for modern web browsers.",
      image: "https://static.bokeh.org/logos/logotype.svg",
    },
    {
      id: 11,
      name: "Streamlit",
      url: "https://streamlit.io/",
      description:
        "Streamlit is an open-source app framework for Machine Learning and Data Science teams.",
      image:
        "https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-darktext.svg",
    },
    {
      id: 12,
      name: "LightingAI",
      url: "https://lightning.ai/",
      description:
        "LightningAI is a platform that enables you to create and deploy machine learning models.",
      image:
        "https://avatars.githubusercontent.com/u/58386951?s=200&v=4",
    }
  ];

  const pythonPackages = [
    {
      id: 1,
      name: "TensorFlow",
      url: "https://www.tensorflow.org/",
      description:
        "TensorFlow is an open-source library for numerical computation and large-scale machine learning.",

      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
      command: "pip install tensorflow",
    },
    {
      id: 2,
      name: "PyTorch",
      url: "https://pytorch.org/",
      description:
        "PyTorch is an open-source machine learning library based on the Torch library.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png",
      command: "pip install torch",
    },
    {
      id: 3,
      name: "Scikit-learn",
      url: "https://scikit-learn.org/",
      description:
        "Scikit-learn is a free software machine learning library for the Python programming language.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      command: "pip install scikit-learn",
    },
    {
      id: 4,
      name: "Keras",
      url: "https://keras.io/",
      description:
        "Keras is an open-source deep learning library written in Python.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
      command: "pip install keras",
    },
    {
      id: 5,
      name: "OpenCV",
      url: "https://opencv.org/",
      description:
        "OpenCV is an open-source computer vision and machine learning software library.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
      command: "pip install opencv-python",
    },
    {
      id: 6,
      name: "Pandas",
      url: "https://pandas.pydata.org/",
      description:
        "pandas is a fast, powerful, flexible, and easy-to-use open-source data analysis and data manipulation library built on top of the Python programming language.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
      command: "pip install pandas",
    },
    {
      id: 7,
      name: "NumPy",
      url: "https://numpy.org/",
      description:
        "NumPy is an open-source numerical computing library for the Python programming language.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
      command: "pip install numpy",
    },
    {
      id: 8,
      name: "Matplotlib",
      url: "https://matplotlib.org/",
      description:
        "Matplotlib is a plotting library for the Python programming language and its numerical mathematics extension NumPy.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg",
      command: "pip install matplotlib",
    },
    {
      id: 9,
      name: "Seaborn",
      url: "https://seaborn.pydata.org/",
      description:
        "Seaborn is a Python data visualization library based on matplotlib.",
      image:
        "https://user-images.githubusercontent.com/315810/92255284-156f1180-eea0-11ea-9d2d-be8262670e8c.png",
      command: "pip install seaborn",
    },
    {
      id: 10,
      name: "NLTK",
      url: "https://www.nltk.org/",
      description:
        "NLTK is a leading platform for building Python programs to work with human language data.",
      image:
        "https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png",
      command: "pip install nltk",
    },
    {
      id: 11,
      name: "Gensim",
      url: "https://radimrehurek.com/gensim/",
      description:
        "Gensim is a Python library for topic modelling, document indexing, and similarity retrieval with large corpora.",
      image:
        "https://radimrehurek.com/gensim/_images/gensim_logo_positive_complete_tb.png",
      command: "pip install gensim",
    },
    {
      id: 12,
      name: "Spacy",
      url: "https://spacy.io/",
      description:
        "spaCy is a free, open-source library for advanced Natural Language Processing (NLP) in Python.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/SpaCy_logo.svg/2560px-SpaCy_logo.svg.png",
      command: "pip install spacy",
    },
    {
      id: 13,
      name: "Flask",
      url: "https://flask.palletsprojects.com/en/2.0.x/",
      description:
        "Flask is a lightweight WSGI web application framework.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
      command: "pip install flask",
    },
    {
      id: 14,
      name: "Django",
      url: "https://www.djangoproject.com/",
      description:
        "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
      command: "pip install django",
    },
    {
      id: 15,
      name: "FastAPI",
      url: "https://fastapi.tiangolo.com/",
      description:
        "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.",
      image:
        "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
      command: "pip install fastapi",
    },
    {
      id: 16,
      name: "PyQt",
      url: "https://riverbankcomputing.com/software/pyqt/intro",
      description:
        "PyQt is a set of Python v2 and v3 bindings for The Qt Company's Qt application framework and runs on all platforms supported by Qt including Windows, macOS, Linux, iOS, and Android.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Python_and_Qt.svg/1200px-Python_and_Qt.svg.png",
      command: "pip install pyqt5",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="text-center">
        <button className="my-5 text-xl sm:text-2xl md:text-3xl">
          <a href="vscode://">
            Click here to start creating your own AI
          </a>
        </button>
      </div>
      <div className="mx-5">
        <button className="my-5 text-md sm:text-lg md:text-xl cursor-default">
          General OpenSource Python Packages for AI Development
        </button>
      </div>
      <div className="flex flex-wrap justify-around my-3">
        {/* load the card components and pass the props */}
        {/* <Card name={aiResources[0].name} url={aiResources[0].url} description={aiResources[0].description} image={aiResources[0].image} /> */}
        {/* load dynamically using map */}
        {pythonPackages.map((pythonPackage) => (
          <Card
            key={pythonPackage.id}
            name={pythonPackage.name}
            url={pythonPackage.url}
            desc={pythonPackage.description}
            image={pythonPackage.image}
            command={pythonPackage.command}
          />
        ))}
      </div>

      <div className="mx-5">
        <button className="my-5 text-md sm:text-lg md:text-xl cursor-default">
          Online Platforms for fasttracking your development
        </button>
      </div>
      <div className="flex flex-wrap justify-around my-3">
        {/* load the card components and pass the props */}
        {/* <Card name={aiResources[0].name} url={aiResources[0].url} description={aiResources[0].description} image={aiResources[0].image} /> */}
        {/* load dynamically using map */}
        {aiResources.map((aiResource) => (
          <Card
            key={aiResource.id}
            name={aiResource.name}
            url={aiResource.url}
            desc={aiResource.description}
            image={aiResource.image}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
