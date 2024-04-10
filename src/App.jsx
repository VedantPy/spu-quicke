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
      name: "TensorFlow",
      url: "https://www.tensorflow.org/",
      description:
        "TensorFlow is an open-source library for numerical computation and large-scale machine learning.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    },
    {
      id: 8,
      name: "PyTorch",
      url: "https://pytorch.org/",
      description:
        "PyTorch is an open-source machine learning library based on the Torch library.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png",
    },
    {
      id: 9,
      name: "Scikit-learn",
      url: "https://scikit-learn.org/",
      description:
        "Scikit-learn is a free software machine learning library for the Python programming language.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    },
    {
      id: 10,
      name: "Keras",
      url: "https://keras.io/",
      description:
        "Keras is an open-source deep learning library written in Python.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
    },
    {
      id: 11,
      name: "Fast.ai",
      url: "https://www.fast.ai/",
      description:
        "fast.ai is a research lab with the mission of making deep learning more accessible.",
      image:
        "https://thumb.tildacdn.com/tild3263-3763-4737-a163-623437306266/-/resize/280x/-/format/webp/fastai.png",
    },
    {
      id: 12,
      name: "Hugging Face",
      url: "https://huggingface.co/",
      description:
        "Hugging Face is an AI research organization that provides state-of-the-art NLP technologies.",
      image:
        "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo-with-title.png",
    },
    {
      id: 13,
      name: "OpenCV",
      url: "https://opencv.org/",
      description:
        "OpenCV is an open-source computer vision and machine learning software library.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
    },
    {
      id: 14,
      name: "Pandas",
      url: "https://pandas.pydata.org/",
      description:
        "pandas is a fast, powerful, flexible, and easy-to-use open-source data analysis and data manipulation library built on top of the Python programming language.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
    },
    {
      id: 15,
      name: "NumPy",
      url: "https://numpy.org/",
      description:
        "NumPy is an open-source numerical computing library for the Python programming language.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
    },
    {
      id: 16,
      name: "Matplotlib",
      url: "https://matplotlib.org/",
      description:
        "Matplotlib is a plotting library for the Python programming language and its numerical mathematics extension NumPy.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg",
    },
    {
      id: 17,
      name: "Seaborn",
      url: "https://seaborn.pydata.org/",
      description:
        "Seaborn is a Python data visualization library based on matplotlib.",
      image:
        "https://user-images.githubusercontent.com/315810/92255284-156f1180-eea0-11ea-9d2d-be8262670e8c.png",
    },
    {
      id: 18,
      name: "Plotly",
      url: "https://plotly.com/",
      description:
        "Plotly is a technical computing company headquartered in Montreal, Quebec, that develops online data analytics and visualization tools.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/Plotly-logo.png",
    },
    {
      id: 19,
      name: "Bokeh",
      url: "https://bokeh.org/",
      description:
        "Bokeh is an interactive visualization library for modern web browsers.",
      image: "https://static.bokeh.org/logos/logotype.svg",
    },
    {
      id: 20,
      name: "Streamlit",
      url: "https://streamlit.io/",
      description:
        "Streamlit is an open-source app framework for Machine Learning and Data Science teams.",
      image:
        "https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-darktext.svg",
    },
  ];

  return (
    <>
      <Navbar />
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
      <Footer/>
    </>
  );
}

export default App;
